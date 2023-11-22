import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LogementPage from './pages/LogementPage'
// import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'

const rootElement = document.getElementById('root')

// Utilisez createRoot depuis "react-dom/client"
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/AboutPage" element={<AboutPage />} /> */}
        <Route path="/ErrorPage" element={<ErrorPage />} />
        <Route path="logement/:id" element={<LogementPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
