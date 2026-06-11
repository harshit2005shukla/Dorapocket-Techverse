# Dorapocket TechVerse — Production Website

## Deploy Instantly

### Option 1: Vercel (Recommended)

1. Push this folder to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repo
4. Click Deploy — done!

### Option 2: Netlify

1. Push to GitHub
2. Go to https://app.netlify.com/start
3. Select repo → Deploy site

### Option 3: Local Preview

```bash
npm install
npm run build
npm run preview
```

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- React Router DOM

## Pages Included

- Home
- About (Founder: Harshit Shukla)
- Services (10 services)
- Portfolio (6 projects)
- Technologies
- Careers (Application form)
- Contact (Full form)

All branding is "Dorapocket TechVerse" throughout.

## Live Deploy Steps (Vercel)

```bash
git init
git add .
git commit -m "Dorapocket TechVerse live site"
git branch -M main
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

Then connect the repo on Vercel. Your site will be live in ~60 seconds.