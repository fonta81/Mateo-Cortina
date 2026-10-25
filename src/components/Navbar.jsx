import { useEffect, useState } from 'react'

const links = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
]

let translationWidgetPromise

export default function Navbar({ setTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.gtranslateSettings = {
      default_language: 'es',
      languages: ['es', 'en'],
      wrapper_selector: '.gtranslate_wrapper',
      switcher_horizontal_position: 'inline',
      switcher_vertical_position: 'top',
      flag_size: 16,
      flag_style: '2d',
    }

    if (!translationWidgetPromise) {
      translationWidgetPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = 'https://cdn.gtranslate.net/widgets/latest/float.js'
        script.async = true
        script.onload = resolve
        script.onerror = () => reject(new Error('GTranslate widget failed to load'))
        document.head.appendChild(script)
      })
    }

    translationWidgetPromise.catch((error) => {
      console.error('Could not load the translation widget:', error)
    })
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">Mateo Jose Cortina Fontalvo.</div>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            aria-label="Cambiar tema"
            onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
          >
            {/* Icono simple SVG */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79" />
            </svg>
          </button>
          <button
            className="menu-toggle"
            aria-label="Abrir menú"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>

        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="gtranslate_wrapper" role="group" aria-label="Selector de idioma" />
        </div>
      </div>
    </nav>
  )
}
