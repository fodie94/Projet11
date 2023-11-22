import { NavLink } from 'react-router-dom'
import '../styles/Header.css'
import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className="header-primary">
      <img alt="Kasa" src={logo}></img>
      <nav>
        <ul>
          <li>
            <NavLink
              className="navlink text-shadow"
              style={({ isActive }) => {
                return {
                  textDecorationColor: isActive
                    ? 'var(--color-primary)'
                    : 'transparent',
                }
              }}
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink text-shadow"
              style={({ isActive }) => {
                return {
                  textDecorationColor: isActive
                    ? 'var(--color-primary)'
                    : 'transparent',
                }
              }}
              to="/ErrorPage"
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
