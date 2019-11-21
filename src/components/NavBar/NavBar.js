import React from 'react'
import { Link } from 'react-router-dom'
import navbar from '../../config/navbar.json'
import {
  Navbar,
} from 'reactstrap';


function NavBar(props) {
  const createNavItems = () => {
    return navbar.map((section, index) => {
      return (
        <b key={index}><Link to={section.value}>{section.label}</Link></b> 
      )
    })
  }

  return (
    <div>
      <Navbar>
        { createNavItems() }
        <b><Link to='/'>{props.user ? 'NEW GAME': 'LOGIN'}</Link></b>
      </Navbar>
    </div>
  )
}

export default NavBar
