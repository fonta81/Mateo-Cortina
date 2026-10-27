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
