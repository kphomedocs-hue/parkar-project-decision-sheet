const PROJECT_TOKEN_MAP = {
  new_residence: 'new_residence',
  renovation: 'renovation',
  bungalow: 'bungalow',
  farmhouse: 'farmhouse',
  landscape: 'landscape',
  flat_apartment_interiors: 'flat_interiors',
  flat_interiors: 'flat_interiors',
  apartment_flat: 'flat_interiors',
  'full-scope_residential_project': 'full_scope',
  full_scope: 'full_scope',
  full_scope_residential_project: 'full_scope',
  not_sure_we_can_recommend: 'not_sure',
  not_sure: 'not_sure'
};

const SERVICE_TOKEN_MAP = {
  architecture: 'architecture',
  interiors: 'interiors',
  landscape: 'landscape',
  project_management: 'project_management',
  not_sure_we_can_recommend: 'not_sure',
  not_sure: 'not_sure'
};

function normaliseText(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

export function normaliseProjectType(value) {
  const key = normaliseText(value);
  return PROJECT_TOKEN_MAP[key] || key || 'not_sure';
}

export function normaliseServiceScope(value) {
  const key = normaliseText(value);
  return SERVICE_TOKEN_MAP[key] || key || 'not_sure';
}

export function deriveRoutingAnswers(answers = {}) {
  const projectType = normaliseProjectType(answers.projectType || answers.q01_1 || 'not_sure');
  const rawScopes = answers.serviceScopes || answers.q01_2 || answers.q03_1 || ['not_sure'];
  const serviceScopes = (Array.isArray(rawScopes) ? rawScopes : [rawScopes]).map(normaliseServiceScope);
  const tailorRaw = answers.tailorMode || answers.q01_4 || '';
  const tailorMode = normaliseText(tailorRaw).includes('no_show_the_full') || tailorRaw === 'full_residential'
    ? 'full_residential'
    : 'tailored';
  return { ...answers, projectType, serviceScopes, tailorMode };
}

function valuesEquivalent(a, b) {
  if (a === b) return true;
  return normaliseText(a) === normaliseText(b);
}

export function evaluateShowIf(showIf, answers) {
  if (!showIf) return true;
  if (showIf.operator === 'and') return (showIf.conditions || []).every(condition => evaluateShowIf(condition, answers));
  if (showIf.operator === 'or') return (showIf.conditions || []).some(condition => evaluateShowIf(condition, answers));

  const answer = answers[showIf.questionId];
  if (showIf.operator === 'equals') {
    if (Array.isArray(answer)) return answer.some(item => valuesEquivalent(item, showIf.value));
    return valuesEquivalent(answer, showIf.value);
  }
  if (showIf.operator === 'not_equals') {
    if (Array.isArray(answer)) return !answer.some(item => valuesEquivalent(item, showIf.value));
    return !valuesEquivalent(answer, showIf.value);
  }
  if (showIf.operator === 'in') {
    const allowed = Array.isArray(showIf.value) ? showIf.value : [showIf.value];
    return allowed.some(value => valuesEquivalent(answer, value));
  }
  if (showIf.operator === 'includes') {
    const list = Array.isArray(answer) ? answer : [answer];
    return list.some(value => valuesEquivalent(value, showIf.value));
  }
  return true;
}

export function shouldShowQuestion(question, answers) {
  if (!question) return false;
  const routed = deriveRoutingAnswers(answers);

  if (routed.tailorMode === 'full_residential') {
    return evaluateShowIf(question.showIf, routed);
  }

  const projectTypes = question.projectTypes || ['all'];
  const serviceScopes = question.serviceScopes || ['all'];
  const projectMatch = projectTypes.includes('all') || projectTypes.includes(routed.projectType);
  const serviceMatch = serviceScopes.includes('all') || routed.serviceScopes.some(scope => serviceScopes.includes(scope));

  return Boolean(projectMatch && serviceMatch && evaluateShowIf(question.showIf, routed));
}

export function getVisibleQuestions(questions, answers) {
  return questions.filter(question => shouldShowQuestion(question, answers));
}

export function isAnswered(question, answers) {
  const value = answers[question.id];
  if (Array.isArray(value)) return value.length > 0;
  return value !== undefined && value !== null && String(value).trim() !== '';
}

export function calculateProgress(questions, answers) {
  const visible = getVisibleQuestions(questions, answers);
  const answered = visible.filter(q => isAnswered(q, answers));
  return {
    answered: answered.length,
    visible: visible.length,
    percent: visible.length ? Math.round((answered.length / visible.length) * 100) : 0
  };
}
