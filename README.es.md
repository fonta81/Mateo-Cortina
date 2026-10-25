# Mi Presentación

Portafolio personal y landing page de Mateo Cortina Fontalvo, construido con React + Vite. El proyecto está pensado como una web moderna, minimalista y responsive para presentar información profesional, habilidades, proyectos y medios de contacto.

## Descripción

Esta aplicación muestra una presentación personal con secciones clave:

- Inicio / hero con presentación principal
- Sobre mí
- Habilidades técnicas
- Proyectos destacados
- Contacto
- Tema claro/oscuro con persistencia local
- Navegación responsive

La interfaz está diseñada para verse bien en desktop y móvil, con una estética limpia y moderna centrada en la identidad personal del desarrollador.

## Tecnologías utilizadas

- React 19
- Vite
- JavaScript
- CSS personalizado
- LocalStorage para persistir el estado del tema

## Estructura del proyecto

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

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/fonta81/Mateo-Cortina.git
cd MiPresentacion
```

2. Instala las dependencias:

```bash
npm install
```

## Scripts disponibles

```bash
npm run dev
```
Inicia el servidor de desarrollo de Vite.

```bash
npm run build
```
Genera la versión de producción para desplegar.

```bash
npm run preview
```
Sirve la build de producción localmente para revisión.

```bash
npm run lint
```
Ejecuta la validación de lint con Oxlint.

## Cómo funciona

- El componente `App` maneja el tema global con `localStorage`.
- La navegación se adapta a dispositivos pequeños con menú desplegable.
- El contenido principal se organiza en secciones para un perfil profesional claro y atractivo.
- Los proyectos y habilidades están declarados como datos estructurados para mantener el contenido sencillo de modificar.

## Personalización

Puedes adaptar fácilmente la información del portfolio editando los componentes en `src/components` y el contenido de los arrays en:

- `src/components/Hero.jsx`
- `src/components/About.jsx`
- `src/components/Skills.jsx`
- `src/components/Projects.jsx`
- `src/components/Contact.jsx`

## Despliegue

Este proyecto puede desplegarse en plataformas como:

- Vercel
- Netlify
- GitHub Pages
- cualquier hosting estático compatible con Vite

## Autor

Mateo Cortina Fontalvo

Enlace GitHub: https://github.com/fonta81

## Licencia

Este proyecto se distribuye con fines personales y de presentación profesional.
