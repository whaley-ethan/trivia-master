import React from 'react'
import { Link } from 'react-router-dom'
import navbar from '../../config/navbar.json'

function NavBar() {
  const createNavItems = () => {
    return navbar.map((section, index) => {
      return (
        <b key={index}><a href="#">{section.label} | </a></b> 
      )
    })
  }

  return (
    <div>
      <nav>
        { createNavItems() }
        <b><Link to='/'>NEW GAME</Link></b>
      </nav>
    </div>
  )
}

export default NavBar
