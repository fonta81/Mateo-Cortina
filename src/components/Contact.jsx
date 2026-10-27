const contacts = [
  {
    label: 'GitHub',
    href: 'https://github.com/fonta81',
    icon: 'https://github.com/favicon.ico',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mateocortina/',
    icon: 'https://linkedin.com/favicon.ico',
  },
  {
    label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=cortinamateo211%40gmail.com',
    icon: 'https://google.com/favicon.ico',
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
            {item.label}
          </a>
        ))}
      </div>
    </section>
  )
}
