export default function ProjectCard({ title, description, link, image }) {
  return (
    <article className="project-card">
      {image && <img src={image} alt={title} className="project-image" />}
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            Ver proyecto <span>→</span>
          </a>
        )}
      </div>
    </article>
  )
}
