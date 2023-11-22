import React, { useState } from 'react'
import '../styles/About.css'

const Collapsible = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapsible">
      <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      {isOpen && <div className="content">{content}</div>}
    </div>
  )
}

const About = () => {
  return (
    <div className="About">
      <Collapsible
        title="Flabilité"
        content="Contenu sur la flabilité. La flabilité est la qualité d'être flable."
      />
      <Collapsible
        title="Respect"
        content="Contenu sur le respect. Le respect est la base de toute relation saine."
      />
      <Collapsible
        title="Service"
        content="Contenu sur le service. Nous nous engageons à fournir un service de qualité."
      />
      <Collapsible
        title="Sécurité"
        content="Contenu sur la sécurité. La sécurité de nos clients est notre priorité."
      />
    </div>
  )
}

export default About
