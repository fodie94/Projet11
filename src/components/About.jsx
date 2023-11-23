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
      <Collapsible title="Flabilité" content="Contenu sur la flabilité." />
      <Collapsible title="Respect" content="Contenu sur le respect." />
      <Collapsible title="Service" content="Contenu sur le service." />
      <Collapsible title="Sécurité" content="Contenu sur la sécurité." />
    </div>
  )
}

export default About
