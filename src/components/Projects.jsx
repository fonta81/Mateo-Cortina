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
      'Automated setup script to configure fresh Fedora and CachyOS Linux installations with essential dev tools, Zsh, Neovim, and Flatpaks.',
    link: 'https://github.com/fonta81/linux-setup-script',
    image: 'src/assets/Linux.png',
  },
  {
    title: 'Weather App',
    description:
      'Consulta del clima en tiempo real consumiendo una API externa, con interfaz limpia y adaptable.',
    link: '#',
    image: '',
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
