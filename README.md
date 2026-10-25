# My Portfolio

[English](README.md) | [Español](README.es.md)

Personal portfolio and landing page for Mateo Cortina Fontalvo, built with React + Vite. The project is designed as a modern, minimalist, and responsive website to present professional information, skills, projects, and contact details.

## Description

This application showcases a personal presentation with key sections:

- Home / hero with a main introduction
- About me
- Technical skills
- Featured projects
- Contact
- Light/dark theme with local persistence
- Responsive navigation

The interface is designed to look good on desktop and mobile, with a clean and modern aesthetic focused on the developer's personal identity.

## Technologies Used

- React 19
- Vite
- JavaScript
- Custom CSS
- LocalStorage to persist the theme state

## Project Structure

```bash
src/
├── App.jsx
├── App.css
├── main.jsx
├── assets/
│   ├── hero.png
│   ├── IconMine.jpeg
│   ├── react.svg
│   └── vite.svg
└── components/
    ├── About.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    ├── Hero.jsx
    ├── Navbar.jsx
    ├── ProjectCard.jsx
    ├── Projects.jsx
    ├── SkillBadge.jsx
    ├── Skills.jsx
    └── ThemeToggle.jsx
```

## Requirements

- Node.js 18 or higher
- npm

## Installation

1. Clone the repository:

```bash
git clone https://github.com/fonta81/Mateo-Cortina.git
cd MiPresentacion
```

2. Install the dependencies:

```bash
npm install
```

## Available Scripts

```bash
npm run dev
```
Starts the Vite development server.

```bash
npm run build
```
Builds the production version for deployment.

```bash
npm run preview
```
Serves the production build locally for review.

```bash
npm run lint
```
Runs the Oxlint validation.

## How It Works

- The `App` component manages the global theme using `localStorage`.
- The navigation adapts to smaller devices with a dropdown menu.
- The main content is organized into sections for a clear and attractive professional profile.
- Projects and skills are defined as structured data to keep the content easy to modify.

## Customization

You can easily adapt the portfolio information by editing the components in `src/components` and the content of the arrays in:

- `src/components/Hero.jsx`
- `src/components/About.jsx`
- `src/components/Skills.jsx`
- `src/components/Projects.jsx`
- `src/components/Contact.jsx`

## Deployment

This project can be deployed on platforms such as:

- Vercel
- Netlify
- GitHub Pages
- any static hosting compatible with Vite

## Author

Mateo Cortina Fontalvo

GitHub link: https://github.com/fonta81

## License

[License MIT](LICENSE)