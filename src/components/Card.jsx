// Card.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ src, title, id }) {
  return (
    <Link to={`/logement/${id}`} className="card-link">
      <article className="card inversed">
        <img src={src} alt={title} />
        <p className="text-shadow">{title}</p>
      </article>
    </Link>
  )
}
