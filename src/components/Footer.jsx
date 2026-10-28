const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {currentYear} Mateo Cortina. Todos los derechos reservados.
      </p>
    </footer>
  )
}
