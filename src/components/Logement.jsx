import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CarouselPicture from './Carousel'
import Rating from './Rating'
import Collapse from './Collapse'
import '../styles/Logement.css'
import '../styles/Header.css'

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
  return (
    <>
      <Header />
      <CarouselPicture />
      {/* <section className="bannerLogement">
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
      </section> */}
      <div className="LogementMobile">
        <div className="LogementLocation">
          <h1>{title}</h1>
          <p>{location}</p>
        </div>
        <div className="LogementTags">
          {tags.slice(1).map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
        <div className="LogementRatingName">
          <div className="rating">
            <Rating rate={rating} />
          </div>
          <div className="LogementName">
            <p>{host.name}</p>
            <img alt={host.name} src={host.picture} />
          </div>
        </div>
        <div className="LogementDescriptionEquipement">
          {/* Utilisation du composant Collapse pour la section Description */}
          <Collapse title="Description" content={description} />
          {/* Utilisation du composant Collapse pour la section Equipements */}
          <Collapse
            title="Equipements"
            content={equipments.slice(1).map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))}
          />
        </div>
      </div>{' '}
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
        <div className="LogementTagsRatings">
          <div className="LogementTags">
            {tags.slice(1).map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
          <div className="rating">
            <Rating rate={rating} />
            {/* <p>{rating}</p>
            {Array.isArray(rating) &&
              rating.slice(1).map((star, index) => <p key={index}>{star}</p>)} */}
          </div>
        </div>
        <div className="LogementDescriptionEquipement">
          <Collapse title="Description" content={description} />
          <Collapse
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
