import SkillBadge from './SkillBadge'

const skills = [
  'Git',
  'Rust',
  'Nix',
  'Bash Script',
  'Go',
  'Python',
  'JavaScript',
  'React',
  'HTML5',
  'CSS3',
  'Vite',
  'GitHub',
  'LinuxBash Script',
  'Docker',
  'NixOs',
  'Cargo(Rust)',
  'SSH',
  'Vim',
  'AI-assisted Development',
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
