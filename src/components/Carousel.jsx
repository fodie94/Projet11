import React, { useState } from 'react'
import '../styles/Logement.css'
import '../styles/Carousel.css'
import previousIcon from '../assets/previous.svg'
import nextIcon from '../assets/next.svg'

export default function CarouselPicture({ pictures, title }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleNextImage = () => {
    setCurrentImageIndex(currentImageIndex + 1)

    if (currentImageIndex >= pictures.length - 1) {
      setCurrentImageIndex(0)
    }
  }

  const handlePreviousImage = () => {
    setCurrentImageIndex(currentImageIndex - 1)

    if (currentImageIndex <= 0) {
      setCurrentImageIndex(pictures.length - 1)
    }
  }

  return (
    <div className="BannerCarousel">
      <div className="BannerPictures">
        <img src={pictures[currentImageIndex]} alt={title} />
      </div>
      <div className="ButtonPictures">
        <button className="prev" onClick={handlePreviousImage}>
          <img src={previousIcon} alt="Précédent" />
        </button>
        <button className="next" onClick={handleNextImage}>
          <img src={nextIcon} alt="Suivant" />
        </button>
      </div>
      <div className="NombrePictures">
        <p>
          {currentImageIndex + 1}/{pictures.length}
        </p>
      </div>
    </div>
  )
}
