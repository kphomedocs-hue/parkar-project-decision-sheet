export const FORMKEEP_ENDPOINT = 'https://formkeep.com/f/eb6e97b660a4';

export function generateReferenceId() {
  const part = Math.random().toString(36).slice(2, 7).toUpperCase();
  const date = new Date().toISOString().slice(2, 10).replaceAll('-', '');
  return `PDS-${date}-${part}`;
}

export function formatAnswer(value) {
  if (Array.isArray(value)) return value.join('; ');
  return value ?? '';
}

export function buildSubmissionPayload({ answers, questions, sections }) {
  const bySection = Object.fromEntries(sections.map(section => [section.sectionId, section]));
  const referenceId = answers.__referenceId || generateReferenceId();
  answers.__referenceId = referenceId;
  const payload = {
    reference_id: referenceId,
    version: 'Parkar & Associates Smart Residential Questionnaire',
    submitted_at: new Date().toISOString(),
    project_type: formatAnswer(answers.q01_1 || answers.projectType),
    services_required: formatAnswer(answers.q01_2 || answers.serviceScopes),
    client_name: formatAnswer(answers.q01_6),
    phone_whatsapp: formatAnswer(answers.q01_7),
    email: formatAnswer(answers.q01_8),
    preferred_communication: formatAnswer(answers.q01_9),
    full_response_text: buildFullResponseText({ answers, questions, sections })
  };

  for (const question of questions) {
    const value = answers[question.id];
    if (value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0)) continue;
    const section = bySection[question.sectionId];
    const key = `${question.questionCode || question.id} - ${section?.title || question.sectionId} - ${question.label}`;
    payload[key] = formatAnswer(value);
  }

  const leadScore = calculateLeadScore(answers);
  payload.internal_lead_score = `${leadScore.score} / 100`;
  payload.internal_lead_label = leadScore.label;
  payload.items_requiring_architect_guidance = findArchitectGuidanceItems({ answers, questions }).join('\n');

  return payload;
}

export function buildFullResponseText({ answers, questions, sections }) {
  const bySection = Object.fromEntries(sections.map(section => [section.sectionId, section]));
  const lines = [];
  lines.push('PARKAR & ASSOCIATES');
  lines.push('Smart Residential Questionnaire Submission');
  lines.push(`Reference ID: ${answers.__referenceId || 'Generated on submit'}`);
  lines.push(`Submitted at: ${new Date().toLocaleString()}`);
  lines.push('');

  let currentSection = '';
  for (const question of questions) {
    const value = answers[question.id];
    if (value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0)) continue;
    const sectionTitle = bySection[question.sectionId]?.title || question.sectionId;
    if (sectionTitle !== currentSection) {
      currentSection = sectionTitle;
      lines.push(`\n${sectionTitle}`);
      lines.push('-'.repeat(sectionTitle.length));
    }
    lines.push(`${question.questionCode || question.id}. ${question.label}`);
    lines.push(formatAnswer(value));
    lines.push('');
  }

  const leadScore = calculateLeadScore(answers);
  lines.push('Internal Lead Score');
  lines.push(`${leadScore.score}/100 - ${leadScore.label}`);
  return lines.join('\n');
}

export function calculateLeadScore(answers) {
  let score = 0;
  if (answers.q01_1 && !String(answers.q01_1).toLowerCase().includes('not_sure')) score += 15;
  if (Array.isArray(answers.q01_2) && answers.q01_2.length) score += Math.min(15, 5 + answers.q01_2.length * 3);
  if (answers.q02_1 && answers.q02_2) score += 10;
  if (answers.q02_5 || answers.q02_14) score += 10;
  if (answers.q03_5 || answers.q03_6 || answers.q03_7) score += 15;
  if (answers.q03_9 || answers.q03_10) score += 10;
  if (answers.q01_10) score += 10;
  if (answers.q10_2 || answers.q09_5) score += 10;
  if (Array.isArray(answers.q10_5) && answers.q10_5.length >= 5) score += 5;

  let label = 'Needs clarity';
  if (score >= 80) label = 'Hot';
  else if (score >= 55) label = 'Warm';
  else if (score >= 30) label = 'Early-stage';
  return { score: Math.min(score, 100), label };
}

export function findArchitectGuidanceItems({ answers, questions }) {
  const triggers = ['architect can recommend', 'not sure', 'prefer to discuss', 'need guidance'];
  return questions.flatMap(question => {
    const value = answers[question.id];
    if (!value) return [];
    const text = formatAnswer(value).toLowerCase();
    if (question.architectCanRecommend || triggers.some(trigger => text.includes(trigger))) {
      return [`${question.questionCode || question.id}: ${question.label} — ${formatAnswer(value)}`];
    }
    return [];
  });
}

export async function submitToFormkeep(payload) {
  const formData = new FormData();
  formData.append('utf8', '✓');
  Object.entries(payload).forEach(([key, value]) => formData.append(key, value));

  const response = await fetch(FORMKEEP_ENDPOINT, {
    method: 'POST',
    body: formData,
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) {
    throw new Error(`Formkeep submission failed with status ${response.status}`);
  }

  return response;
}
