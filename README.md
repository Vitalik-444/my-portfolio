<div align="center">

# 🔥 Vitalik — Frontend Developer Portfolio

A modern, responsive, animated personal portfolio with dark / light theme.

<a href="https://my-portfolio-beryl-two-gijd38al2c.vercel.app/">
  <img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Website-dc2626?style=for-the-badge" alt="Live Demo" />
</a>

<br />

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [🧩 Sections](#-sections)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🎨 Customization](#-customization)
- [☁️ Deployment](#️-deployment)
- [📬 Contact](#-contact)

---

## ✨ Features

- 🌗 **Dark / Light theme** — switchable and remembered between visits
- 🧭 **Floating bottom navigation** — highlights the section currently in view
- 🎞️ **Smooth animations** — scroll reveal effects powered by AOS and Framer Motion
- 📊 **Animated skill rings** — fill up when the section scrolls into view
- 🖼️ **Projects slider** — endless, swipeable showcase of work
- 🏅 **Certificates list** — animated, clean and easy to scan
- 📱 **Fully responsive** — looks great on mobile, tablet and desktop
- ⚡ **Fast** — Vite build, optimized WebP images, lazy loading
- ♿ **Accessible** — semantic markup, ARIA labels and `prefers-reduced-motion` support

## 🧩 Sections

| Section | Description |
| --- | --- |
| 🏠 **Home** | Introduction, stats, "Download CV" and "Hire Me" buttons |
| 👤 **About** | Short bio and personal story |
| 🧠 **Skills** | Animated circular progress for each technology |
| 🏆 **Certificates** | Courses and certifications |
| 💼 **Projects** | Slider with live demos and GitHub links |
| ✉️ **Contact** | Contact form and illustration |

## 🛠️ Tech Stack

<div align="center">

<img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" width="56" height="56" />&nbsp;&nbsp;
<img src="https://cdn.simpleicons.org/vite/646CFF" alt="Vite" width="56" height="56" />&nbsp;&nbsp;
<img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" width="56" height="56" />&nbsp;&nbsp;
<img src="https://cdn.simpleicons.org/framer/0055FF" alt="Framer Motion" width="56" height="56" />&nbsp;&nbsp;
<img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" width="56" height="56" />&nbsp;&nbsp;
<img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" width="56" height="56" />&nbsp;&nbsp;
<img src="https://cdn.simpleicons.org/css/1572B6" alt="CSS3" width="56" height="56" />&nbsp;&nbsp;
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://cdn.simpleicons.org/vercel/ffffff">
  <img src="https://cdn.simpleicons.org/vercel/000000" alt="Vercel" width="56" height="56" />
</picture>&nbsp;&nbsp;
<img src="https://cdn.simpleicons.org/git/F05032" alt="Git" width="56" height="56" />

</div>

| Category | Technologies |
| --- | --- |
| **Framework** | React 19 |
| **Build tool** | Vite |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion, AOS |
| **Icons** | Lucide React, React Icons |
| **Linting** | Oxlint |
| **Hosting** | Vercel |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Vitalik-444/my-portfolio.git

# 2. Go to the project folder
cd my-portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## 📁 Project Structure

```text
my-portfolio
├── public/                # Static files (favicon, CV)
├── src/
│   ├── assets/            # Images and project screenshots
│   ├── components/        # Navbar, Hero, About, Skills, Certificates,
│   │                      # Projects, Contact, Footer
│   ├── App.jsx            # Root component, theme logic
│   ├── index.css          # Global styles and Tailwind import
│   └── main.jsx           # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Customization

- 📝 **Texts, links and social networks** — `src/components/*.jsx`
- 💼 **Projects** (title, description, tags, `github` / `demo` links) — `src/components/Projects.jsx`
- 🖼️ **Photos** — `src/assets/`
- 📄 **CV file** — put `cv.pdf` into `public/` (used by the "Download CV" button)
- ✉️ **Contact form** — connect a service (Formspree, EmailJS or your own API) in `Contact.jsx` → `handleSubmit`

## ☁️ Deployment

The project is deployed on **Vercel**. To deploy your own copy:

1. Push the repository to GitHub
2. Import it on [vercel.com](https://vercel.com/new)
3. Keep the default Vite settings (build command `npm run build`, output directory `dist`)
4. Click **Deploy** 🎉

🔗 **Live website:** [my-portfolio-beryl-two-gijd38al2c.vercel.app](https://my-portfolio-beryl-two-gijd38al2c.vercel.app/)

## 📬 Contact

<div align="center">

<a href="https://github.com/Vitalik-444">
  <img src="https://img.shields.io/badge/GitHub-Vitalik--444-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
</a>
<a href="https://my-portfolio-beryl-two-gijd38al2c.vercel.app/#contact">
  <img src="https://img.shields.io/badge/Email-Get_in_touch-dc2626?style=for-the-badge&logo=gmail&logoColor=white" alt="Contact" />
</a>

<br /><br />

⭐ If you like this project, give it a star!

Made with ❤️ by **Vitalik**

</div>
