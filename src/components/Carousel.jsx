import React, { useState } from 'react'
import logements from '../data/logements.json'
import '../styles/Logement.css'
import '../styles/Carousel.css'

export default function CarouselPicture() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const logement = logements[currentImageIndex]
  const totalImages = logements.length

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % totalImages)
  }

  const handlePreviousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + totalImages) % totalImages)
  }

  return (
    <div className="BannerCarousel">
      {/* <h1>{logement.title}</h1> */}
      <div className="BannerPictures">
        <img
          src={logement.pictures[0]}
          alt={`${logement.title} - ${currentImageIndex + 1}`}
        />
      </div>
      <div className="ButtonPictures">
        <button className="prev" onClick={handlePreviousImage}>
          Précédent
        </button>
        <button className="next" onClick={handleNextImage}>
          Suivant
        </button>
      </div>
    </div>
  )
}
