const contacts = [
  {
    label: 'GitHub',
    href: 'https://github.com/fonta81',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mateocortina/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=cortinamateo211%40gmail.com',
    icon: 'gmail',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>Contacto</h2>
      </div>
      <div className="contact-links">
        {contacts.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <img
              src={`https://api.iconify.design/simple-icons/${item.icon}.svg?color=currentColor&height=24`}
              alt={`Icono ${item.label}`}
              className="contact-icon"
              loading="lazy"
            />
            {item.label}
          </a>
        ))}
      </div>
    </section>
  )
}
