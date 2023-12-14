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
      <section className="InfoCss">
        <CarouselPicture pictures={pictures} />
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
            <Collapse title="Description" content={description} />
            <Collapse
              title="Equipements"
              content={equipments.slice(1).map((equipment, index) => (
                <p key={index}>{equipment}</p>
              ))}
            />
          </div>
        </div>
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
              {tags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
            <div className="rating">
              <Rating rate={rating} />
            </div>
          </div>
          <div className="LogementDescriptionEquipement">
            <Collapse title="Description" content={description} />
            <Collapse
              title="Equipements"
              content={equipments.map((equipment, index) => (
                <p key={index}>{equipment}</p>
              ))}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
