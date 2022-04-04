import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
export default function navbar() {
  return (
    <nav className='nav'>
      <div className="nav-center">
        <Link to='/'>
          <img src={logo} alt="logo" className='logo' />
        </Link>
        <ul className='nav-links'>
          <Link to='/'>
           <li>home</li>
          </Link>
          <Link to='/about'>
           <li>about</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
