# Portfolio

Hrushi Bhatt's CPRE 4940 portfolio, built with React and Vite.

**Live site:** https://hrushibhatt.github.io/CPRE-4940-Portfolio/

## Run it locally

```bash
npm install
npm run dev     # start the local dev server
npm test        # check that every section renders
npm run build   # production build in dist/
```

## Edit content

All of the text lives in `src/content.js`.
PDFs and project images go in the `public/` folder and are linked from `content.js` by file name (for example `resume.pdf`).

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages through `.github/workflows/deploy.yml`.
In the repository settings, **Pages → Source** must be set to **GitHub Actions**.
