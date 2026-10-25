import SkillBadge from './SkillBadge'

const skills = [
  'React',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Vite',
  'Git',
  'GitHub',
  'Python',
  'Go',
  'Bash Script',
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2>Habilidades</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>
    </section>
  )
}
