import logo from '../assets/logo_light.svg'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <img alt="Kasa" src={logo}></img>
      <span className="copyright">
        <p>© 2023 Kasa. All rights reserved</p>
      </span>
    </footer>
  )
}
