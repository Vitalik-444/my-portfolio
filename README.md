# My Portfolio

Personal portfolio built with **React 19**, **Vite**, **Tailwind CSS 4**, **Framer Motion** and **AOS**.

## Features

- Dark / light theme (remembered between visits)
- Bottom navigation that highlights the section you are currently viewing
- Animated skill rings, certificates list and an endless projects slider
- Responsive layout, optimized WebP images

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # run oxlint
```

## What to customize

- Texts, links and social networks — `src/components/*.jsx`
- Projects (title, description, tags, `github` / `demo` links) — `src/components/Projects.jsx`
- Photos — `src/assets/`
- CV file — put `cv.pdf` into `public/` (used by the "Download CV" button)
- Contact form — connect a service (Formspree, EmailJS, own API) in `Contact.jsx` → `handleSubmit`
