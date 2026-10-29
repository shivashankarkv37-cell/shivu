# Shivashankar KV — Portfolio

A responsive React + Vite portfolio for a BCA student focused on Java backend development. Personal details, links, skills, and project entries are maintained in `src/data/`.

## Run locally

Requirements: Node.js 18 or newer and npm.

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite. To create and preview a production build:

```powershell
npm run build
npm run preview
```

## Update your details

- Edit contact details, education, social links, and the resume path in `src/data/personalInfo.js`.
- Add or remove project cards and update statuses, technologies, implemented features, and real URLs in `src/data/projects.js`.
- Edit categorized skills in `src/data/skills.js`.
- The resume is served from `public/resume.pdf`. Replace it with an updated PDF and keep that filename, or change `resumeUrl` in `personalInfo.js`. The navigation button is hidden automatically if `resumeUrl` is blank.
- Project repository and demo links are omitted until real URLs are configured. Only entries in `implementedFeatures` are shown.

The contact form performs browser validation and opens a prefilled draft in the visitor's default email application. It does not send or store messages; connect a trusted form backend or email service if direct submission is needed.

## Push to GitHub

Create an empty repository on GitHub, then run these commands from this project directory (replace the URL with your repository's real URL):

```powershell
git init
git add .
git commit -m "Build responsive developer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Deploy to Vercel

1. Push the project to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and choose **Add New → Project**.
3. Import the portfolio repository.
4. Keep the detected Vite settings: build command `npm run build`, output directory `dist`, and install command `npm install`.
5. Select **Deploy**. No environment variables or SPA rewrites are needed because the site uses one page and no client-side router.
6. For later changes, push commits to the connected branch; Vercel will build and deploy them automatically.
