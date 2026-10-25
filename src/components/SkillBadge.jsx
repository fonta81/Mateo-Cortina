export default function SkillBadge({ name }) {
  return (
    <span className="skill-badge" title={name}>
      {name}
    </span>
  )
}
