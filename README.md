# Francesca Rigoni — Personal CV Website

Bilingual (IT / EN) React CV web application for **Francesca Rigoni**, built for deployment on GitHub Pages.

## Tech Stack
- React (Create React App)
- Context API (`LanguageContext`) for instant IT / UK English switching
- `react-markdown` + `md-to-pdf` (single `.md` source of truth → auto-generated PDF)
- `gh-pages` for static deployment

## Local Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run locally (automatically generates the CV PDF on startup):
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Test production build:
   ```bash
   npm run build
   ```

## Updating the CV (`.md` → PDF)

The CV content is maintained in `public/cv-en.md` (and PDF styling in `scripts/cv-pdf.css`).

- **To test CV changes locally** while `npm start` is already running:
  1. Edit and save `public/cv-en.md`.
  2. Run the PDF generator manually so the local download button serves the updated PDF:
     ```bash
     npm run generate-cv
     ```
- **To publish CV changes directly to production:**
  1. Edit and save `public/cv-en.md`.
  2. Run `deploy.bat` (no need to run `npm run generate-cv` manually—`npm run deploy` triggers `predeploy` → `npm run build` → `npm run generate-cv` automatically before publishing to GitHub Pages).

## GitHub & Deployment Setup (First Time)

Once Francesca Rigoni's GitHub account (`francescarigoni90`) is created:

1. Create a public GitHub repository named `francesca-rigoni-cv`.
2. Verify `francescarigoni90` is set in:
   - `package.json` (`"homepage": "https://francescarigoni90.github.io/francesca-rigoni-cv"`)
   - `src/data/SummaryData.js`
   - `deploy.bat` (`GITHUB_USER=francescarigoni90`)
3. Link the local folder to GitHub:
   ```bash
   git init
   git branch -M main
   git remote add origin https://github.com/francescarigoni90/francesca-rigoni-cv.git
   ```
4. Run `deploy.bat` (double-click or run from terminal) to commit, push source code to `main`, and deploy the built app to the `gh-pages` branch.

## Live URL
Once deployed, the site will be accessible at:
`https://francescarigoni90.github.io/francesca-rigoni-cv/`

It takes a few minutes for the site to update after deployment.

*(Note: In GitHub repo **Settings → Pages**, verify that the source is set to the `gh-pages` branch, `/ (root)` folder.)*