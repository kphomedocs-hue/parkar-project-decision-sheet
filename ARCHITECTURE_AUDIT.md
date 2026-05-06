# Parkar Questionnaire Architecture Audit

## Checked

- `index.html` imports `SECTIONS` from `sections-data.js` and `QUESTIONS` from `questions-data.js`; it does not keep a second inline question library.
- `sections-data.js` contains section themes, hero image paths, intros, and subcategories.
- `questions-data.js` contains the master questionnaire, required flags, options, project/service filters, conditional logic, and output tags.
- `filtering-rules.js` normalises readable answers into stable tokens and calculates visibility/progress from visible questions.
- `output-mapping.js` builds the Formkeep payload, full-response backup text, guidance items, and lead score.
- Formkeep endpoint is wired as `https://formkeep.com/f/eb6e97b660a4`.

## Fix applied in this audited version

Earlier packaging could include previously answered but currently hidden questions if the user changed project type or service scope before submission. This version now passes only `getVisibleQuestions(...)` into `buildSubmissionPayload(...)` and `buildFullResponseText(...)`, so hidden/skipped questions are omitted from review and submission.

## Remaining launch blocker

Actual visual assets still need to be added:

- `assets/parkar-logo.png`
- all 10 files inside `assets/section-images/`

The app runs without them, but the final premium visual experience depends on them.
