# Kaushik Sridhar — Portfolio

Personal portfolio site, live at https://kaushiksridhar17.github.io/KaushikSridhar/

Built with Next.js 14, React, Tailwind CSS and Framer Motion, exported as a static site and deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Editing content

All text, links, projects, skills and the timeline live in `lib/data.ts`. Edit that file and push; the site rebuilds itself.

- Resume: replace `public/resume.pdf` (keep the name).
- Internship certificate: `public/iamneo.pdf`.
- Photo: `public/kaushik.jpeg` is shown in the About section. To use a different file, change `photo` in `lib/data.ts`.

## Project layout

- `app/` — page layout, global styles
- `components/` — one file per section (Navbar, Hero, About, Experience, Skills, Projects, Certifications, Contact, Footer)
- `lib/data.ts` — site content
- `public/` — PDFs, favicon and any images
- `.github/workflows/deploy.yml` — builds and deploys to GitHub Pages

## Run locally (optional)

Requires Node.js 20 or newer.

    npm install
    npm run dev

Then open http://localhost:3000/KaushikSridhar/
