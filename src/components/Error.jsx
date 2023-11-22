import { Link } from 'react-router-dom'
import '../styles/Error.css'

export default function Error() {
  return (
    <section className="error-page">
      <div>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </section>
  )
}
