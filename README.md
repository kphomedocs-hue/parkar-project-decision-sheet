# Parkar & Associates — Smart Residential Questionnaire

A static GitHub Pages-ready residential onboarding questionnaire for Parkar & Associates.

## Live submission method

The site submits responses to Formkeep using this endpoint:

```text
https://formkeep.com/f/eb6e97b660a4
```

The JavaScript submit flow builds a full Formkeep payload, sends it using `fetch()`, then shows a thank-you confirmation after a successful submission. The **Copy Full Response** button remains available as a backup. If Formkeep fails, the screen asks the client to copy the full response and email it to `Info@parkar.associates`.

## Files in this deployment package

```text
index.html
sections-data.js
questions-data.js
filtering-rules.js
output-mapping.js
README.md
assets/
assets/parkar-logo.png
assets/section-images/section-01-begin-project.jpg
assets/section-images/section-02-property.jpg
assets/section-images/section-03-scope-budget-timeline.jpg
assets/section-images/section-04-family-lifestyle.jpg
assets/section-images/section-05-space-planning.jpg
assets/section-images/section-06-building-systems.jpg
assets/section-images/section-07-interiors-details.jpg
assets/section-images/section-08-technology-security.jpg
assets/section-images/section-09-aesthetic-direction.jpg
assets/section-images/section-10-documents-priorities.jpg
```

## Important asset note

The uploaded file set did **not** include the real `assets/` folder. This package includes the expected folder structure and a missing-assets checklist, but you still need to add the real Parkar logo and 10 section hero images before launch.

The app will still run without those images, but the final branded visual experience requires them.

## Data source note

This deployment uses separate source files:

- `sections-data.js` stores section names, accent colours, hero image paths, intros, and subcategories.
- `questions-data.js` stores the questionnaire.
- `filtering-rules.js` controls project/service filtering, conditional logic, and progress.
- `output-mapping.js` builds the Formkeep payload, full response text, guidance items, and internal lead score.

Future question edits should be made in `questions-data.js`. Future section or image edits should be made in `sections-data.js`.

## GitHub Pages setup

1. Create a repository such as `parkar-project-decision-sheet`.
2. Upload all files from this ZIP into the repository root.
3. Confirm `index.html` is in the root, not inside a folder.
4. Go to **Settings → Pages**.
5. Set:
   - Source: `Deploy from branch`
   - Branch: `main`
   - Folder: `/root`
6. Save and wait for the GitHub Pages URL.

## Suggested custom domain

Use a subdomain such as:

```text
brief.parkar.associates
```

or:

```text
project.parkar.associates
```

Point DNS to GitHub Pages, then add the custom domain in the repository Pages settings.

## Final testing checklist

Test these paths before launch:

- New residence + Architecture + Interiors
- Renovation + Interiors
- Flat / apartment interiors + Interiors
- Landscape + Landscape
- Not sure — we can recommend
- Q01.9 multiple selection
- Tailored form mode
- Full residential mode
- Conditional questions
- Progress calculation
- Review screen
- Copy Full Response
- Formkeep submission
- Mobile layout
- Logo and all section images

## Known limitation

This is a static website. It does not include an admin dashboard or database. Submissions are handled through Formkeep.
