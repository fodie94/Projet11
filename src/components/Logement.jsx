import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/Logement.css'
import '../styles/Header.css'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa' // Importez les icônes nécessaires

export default function Logement({
  title,
  cover,
  description,
  pictures,
  host,
  rating,
  location,
  equipments,
  tags,
  name,
}) {
  const LogementButton = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="LogementButton">
        <button onClick={() => setIsOpen(!isOpen)}>
          {title} {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {isOpen && <div className="content">{content}</div>}
      </div>
    )
  }

  return (
    <>
      <Header />
      <section className="bannerLogement">
        <img alt="" src={pictures[0]} className="bannerLogement-image" />
        <div className="LogementPictures">
          {pictures.slice(1).map((picture, index) => (
            <img
              key={index}
              alt=""
              src={picture}
              className="logement-picture"
            />
          ))}
        </div>
      </section>
      <div className="LogementInfo">
        <div className="LogementLocationName">
          <div className="LogementLocation">
            <h1>{title}</h1>
            <p>{location}</p>
          </div>
          <div className="LogementName">
            <p>{host.name}</p>
            <img alt={host.name} src={host.picture} />
          </div>
        </div>
        <div className="LogementTags">
          {tags.slice(1).map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
        <div className="LogementDescriptionEquipement">
          <LogementButton title="Description" content={description} />
          <LogementButton
            title="Equipements"
            content={equipments.slice(1).map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
