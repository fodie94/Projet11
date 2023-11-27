import React from 'react'
import '../styles/About.css'
import Collapse from './Collapse'

const About = () => {
  return (
    <div className="About">
      <Collapse title="Flabilité" content="Contenu sur la flabilité." />
      <Collapse title="Respect" content="Contenu sur le respect." />
      <Collapse title="Service" content="Contenu sur le service." />
      <Collapse title="Sécurité" content="Contenu sur la sécurité." />
    </div>
  )
}

export default About
