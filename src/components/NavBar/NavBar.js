import React from 'react'
import { Link } from 'react-router-dom'
import navbar from '../../config/navbar.json'
import { Navbar } from 'reactstrap'

import dbAPI from '../../api/dbAPI'


function NavBar(props) {
  const createNavItems = () => {
    return navbar.map((section, index) => {
      return (
        <b key={index}><Link to={section.value}>{section.label}</Link></b> 
      )
    })
  }

  const logout = async () => {
    window.localStorage.clear()
    let response = await dbAPI.logout()
    console.log(response)

  }
  return (
    <div>
      <Navbar>
        { createNavItems() }
        <b><Link to='/'>{props.user ? 'NEW GAME': 'LOGIN'}</Link></b>
        {/* need logout to mutate props or refactor to not use props  -- maybe have homepage useEffect check if window.localStorage exists then mutate there */}
        {props.user && <b><Link to='/' onClick={() => logout()}>LOGOUT</Link></b>}
      </Navbar>
    </div>
  )
}

export default NavBar
