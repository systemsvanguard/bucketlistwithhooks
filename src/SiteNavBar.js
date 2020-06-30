import React from 'react'
import { NavLink } from 'react-router-dom'
import NavLogo from './app/images/logo_portfolio_app.jpg'
import './NavBarJS.js'


const SiteNavBar = () => {
  return (
    <>
      <nav className="navbar is-link" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <img src={NavLogo} alt="My Bucket List" title="My Bucket List" />
          </NavLink>


          <button className="navbar-burger burger button is-link" aria-label="menu" aria-expanded="false" data-target="navMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navMenu" className="navbar-menu">
          <div className="navbar-end">
            <NavLink to="/" className="navbar-item">
              Home
            </NavLink>

            <NavLink to="/services" className="navbar-item">Services</NavLink>
			<NavLink to="/about" className="navbar-item">About</NavLink>
			<NavLink to="/resources" className="navbar-item">Resources</NavLink>
			<NavLink to="/contact" className="navbar-item">Contact</NavLink>
          </div>
        </div>
      </nav>




    </>
  )
}

export default SiteNavBar