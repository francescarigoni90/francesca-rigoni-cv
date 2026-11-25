# Francesca Rigoni — Personal CV Website

Bilingual (IT / EN) React CV web application for **Francesca Rigoni**, built for deployment on GitHub Pages.

## Tech Stack
- React (Create React App)
- Context API (`LanguageContext`) for instant IT / UK English switching
- `gh-pages` for static deployment

## Local Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run locally:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Test production build:
   ```bash
   npm run build
   ```

## GitHub & Deployment Setup (First Time)

Once Francesca Rigoni's GitHub account is created:

1. Create a public GitHub repository named `francesca-rigoni-cv`.
2. Update `GITHUB_USERNAME` in:
   - `package.json` (`"homepage": "https://GITHUB_USERNAME.github.io/francesca-rigoni-cv"`)
   - `src/data/SummaryData.js`
   - `deploy.bat` (`REPO_URL`)
3. Link the local folder to GitHub:
   ```bash
   git init
   git branch -M main
   git remote add origin https://github.com/GITHUB_USERNAME/francesca-rigoni-cv.git
   ```
4. Run `deploy.bat` (double-click or run from terminal) to commit, push source code to `main`, and deploy the built app to the `gh-pages` branch.

## Live URL
Once deployed, the site will be accessible at:
`https://GITHUB_USERNAME.github.io/francesca-rigoni-cv/`

*(Note: In GitHub repo **Settings → Pages**, verify that the source is set to the `gh-pages` branch, `/ (root)` folder.)*