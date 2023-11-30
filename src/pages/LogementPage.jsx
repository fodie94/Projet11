// LogementPage.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import logements from '../data/logements.json'
import Logement from '../components/Logement.jsx'
// import '../styles/root.css'

export default function LogementPage() {
  const { id } = useParams()
  console.log("ID extrait de l'URL :", id)

  const logement = logements.find((logement) => logement.id === id)

  if (!logement) {
    // Gérer le cas où aucun logement n'est trouvé pour l'ID spécifié
    console.log('Logement non trouvé')
    return <p>Logement non trouvé</p>
  }

  return <Logement key={logement.id} {...logement} />
}
