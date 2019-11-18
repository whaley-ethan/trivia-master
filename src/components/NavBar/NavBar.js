import React from 'react'
import { Link } from 'react-router-dom'
import navbar from '../../config/navbar.json'

function NavBar(props) {
  const createNavItems = () => {
    return navbar.map((section, index) => {
      return (
        <b key={index}><Link to={section.value}>{section.label} | </Link></b> 
      )
    })
  }

  return (
    <div>
      <nav>
        { createNavItems() }
        <b><Link to='/'>{props.user ? 'NEW GAME': 'LOGIN'}</Link></b>
      </nav>
    </div>
  )
}

export default NavBar
