import React from 'react'
import { Link } from 'react-router-dom'
import navbar from '../../config/navbar.json'
import { Navbar } from 'reactstrap'

import dbAPI from '../../api/dbAPI'

function NavBar({user, setUser}) {
  const createNavItems = () => {
    return navbar.map((section, index) => {
      const item = <b key={index}><Link to={section.value}>{section.label}</Link></b>
      const blank_item = <></>
      let sectionItem = (section.requiredLogin && !user) ? blank_item : item
      return (
        sectionItem
      )
    })
  }

  const logout = async () => {
    window.localStorage.clear()
    setUser(null)
    let response = await dbAPI.logout()
    console.log(response)

  }
  return (
    <div>
      <Navbar>
        { createNavItems() }
        <b>{user ? <Link to='/home'>NEW GAME</Link>: <Link to='/'>LOGIN</Link>}</b>
        {user && <b><Link to='/' onClick={() => logout()}>LOGOUT</Link></b>}
      </Navbar>
    </div>
  )
}

export default NavBar
