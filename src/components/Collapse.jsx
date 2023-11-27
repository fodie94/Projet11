// Collapse.jsx

import React, { useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

export default function Collapse({ title, content }) {
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
