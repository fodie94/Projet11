// CardGallery.jsx
import React from 'react'
import Card from './Card.jsx'
import logements from '../data/logements.json'
import '../styles/Card.css'

export default function CardGallery() {
  return (
    <div className="gallery">
      <div className="galleryGrid">
        <section className="card-gallery">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              src={logement.cover}
            />
          ))}
        </section>
      </div>
    </div>
  )
}
