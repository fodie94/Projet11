import React, { useState } from 'react'
import logements from '../data/logements.json'
import '../styles/Logement.css'
import '../styles/Carousel.css'
import previousIcon from '../assets/previous.svg'
import nextIcon from '../assets/next.svg'

export default function CarouselPicture() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const logement = logements[currentImageIndex]
  const NomberImages = currentImageIndex + 1
  const totalImages = logements.length
  console.log(totalImages)

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
          <img src={previousIcon} alt="Précédent" />
        </button>
        <button className="next" onClick={handleNextImage}>
          <img src={nextIcon} alt="Suivant" />
        </button>
      </div>
      <div className="NombrePictures">
        <p>
          {NomberImages}/{totalImages}
        </p>
      </div>
    </div>
  )
}
