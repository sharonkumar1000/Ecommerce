import React from 'react'
import './Navbar.css'
import navlogo from '../../Assets/nav-logo.svg'
import navprofile from '../../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt="no image" className="nav-logo" />
      <img src={navprofile} className = "nav-profile" alt="no image" />
    </div>
  )
}

export default Navbar
