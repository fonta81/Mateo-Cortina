const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {currentYear} Mateo. Todos los derechos reservados.
      </p>
    </footer>
  )
}
