const contacts = [
  {
    label: 'GitHub',
    href: 'https://github.com/fonta81',
    domain: 'github.com',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mateocortina/',
    domain: 'linkedin.com',
  },
  {
    label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=cortinamateo211%40gmail.com',
    domain: 'google.com',
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
              src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=32`}
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
