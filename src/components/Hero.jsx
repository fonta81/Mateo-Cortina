import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const avatar = `https://unavatar.io/github/fonta81`

  return (
    <section id="hero" className={`hero ${isVisible ? 'visible' : ''}`}>
      <div className="hero-content">
        <div className="hero-avatar">
          <img src={avatar} alt="Avatar de Mateo" />
        </div>
        <h1 className="hero-title">
          Hola, soy <span className="accent">Mateo</span>
        </h1>
        <p className="hero-subtitle">
          Desarrollador Full-Stack: conectando interfaces intuitivas con un backend sólido.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Ver mis proyectos
          </a>
          <a href="#contact" className="btn btn-outline">
            Contactarme
          </a>
        </div>
      </div>
    </section>
  )
}
