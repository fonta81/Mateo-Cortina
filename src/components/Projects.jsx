import ProjectCard from './ProjectCard'

const projects = [

  {
    title: 'Mi Presentación',
    description:
      'Página de presentación personal construida con React y Vite, enfocada en un diseño minimalista y responsivo.',
    link: '#',
    image: 'src/assets/IconMine.jpeg',
  },
  {
    title: 'linux-setup-script',
    description:
      'Script de configuración automatizada para preparar instalaciones nuevas de Fedora y CachyOS Linux con herramientas de desarrollo esenciales, Zsh, Neovim, Flatpaks, etc.',
    link: 'https://github.com/fonta81/linux-setup-script',
    image: 'src/assets/Linux.png',
  },
  {
    title: 'GoPLayer',
    description:
      'Un reproductor de música para terminal Go con muchas funciones, creado con Bubble Tea, Lipgloss y Beep.',
    link: 'https://github.com/fonta81/GoPLayer',
    image: 'src/assets/GoPlayer.png',
  },
  {
    title: 'BackNixOs',
    description:
      'Configuración automatizada y modular del sistema operativo NixOS orientada a la reproducibilidad y gestión de dotfiles',
    link: 'https://github.com/fonta81/.BackNixOs',
    image: 'src/assets/NixOs.png',
  },
  {
    title: 'Custom-Video-Player',
    description:
      'A lightweight, dependency-free video player built with vanilla HTML, CSS, and JavaScript. Engineered for high compatibility across modern desktop and mobile browsers, as well as Smart TV platforms',
    link: 'https://github.com/fonta81/Video-Reproductor/tree/master',
    image: 'src/assets/VideoPlayer.png',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>Proyectos</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
