## Portfolio (React + Vite + Bootstrap)

Modern, professional, and attractive portfolio built with React, Vite, Bootstrap, and Sass.

### Features

- Responsive layout with Bootstrap 5 and custom Sass
- Light/Dark theme toggle with persistence
- Sections: Hero, About, Skills, Projects, Contact
- React-Bootstrap components and React Icons

### Quickstart

1. Install deps
   - `cd /workspace/portfolio`
   - `npm install`
2. Run dev server
   - `npm run dev`
3. Build & preview
   - `npm run build`
   - `npm run preview`

### Customize

- Update name/brand: `src/components/HeaderNav.jsx`, `src/sections/Hero.jsx`
- About text: `src/sections/About.jsx`
- Skills list: `src/sections/Skills.jsx`
- Projects: `src/sections/Projects.jsx` (title, description, image, link)
- Social links: `src/components/Footer.jsx`
- Global styles/theme: `src/styles/styles.scss`, `index.html` (Google Fonts)

### Structure

- `src/components`: shared UI (`HeaderNav`, `Footer`)
- `src/sections`: page sections (`Hero`, `About`, `Skills`, `Projects`, `Contact`)
- `src/styles/styles.scss`: global styles and variables

### Theming

Theme is applied via `data-bs-theme` on `<html>` and saved in `localStorage`. Initial theme is set on first paint using a tiny inline script in `index.html`.
