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
    title: 'Task Manager',
    description:
      'Aplicación de gestión de tareas con React, permitiendo crear, editar y eliminar tareas de forma sencilla.',
    link: '#',
    image: '/src/assets/react.svg',
  },
  {
    title: 'Weather App',
    description:
      'Consulta del clima en tiempo real consumiendo una API externa, con interfaz limpia y adaptable.',
    link: '#',
    image: '/src/assets/vite.svg',
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
