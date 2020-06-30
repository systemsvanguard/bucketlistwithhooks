import React from 'react'
import { NavLink } from 'react-router-dom'
import Spacer from '../app/images/spacer.png'

const SiteFooter = () => {

  // ending copyright year is current year
  const GetCurrentYear = () => {
    const currDate = new Date();
    const currYear = currDate.getFullYear();
    return (
      <span><strong>{currYear}</strong> </span>
    );
  }

  return (
    <div>
      <br />
      <footer className="footer has-background-link-light">
        <div className="content has-text-centered">
            <p>
              <strong>Not a Real Site</strong><br />
              Yet <a href="http://www.ryanhunter.ca/code/">another</a> <strong>demo project</strong> by <a href="http://www.ryanhunter.ca/">Ryan Hunter</a>, demonstrating React.js, axios, iterating through lists from a RESTful API,  dotenv, <a href="https://reacttraining.com/react-router/">React Router</a>, Google Maps <a href="https://developers.google.com/maps/documentation">API</a>, <a href="https://fontawesome.com/">FontAwesome</a> 5 fonts, and the fantastic <a href="https://bulma.io/">Bulma</a> CSS framework. <br />
              <strong>CREDITS</strong><br />
			  API provided by <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>.  <strong>Filler text</strong> kindly supplied by<a href="https://pirateipsum.me/">PirateIpsum.me</a>. Color, and basic web info references supplied by <a href="https://www.colorhexa.com/">ColorHexa</a>, Mozilla Developer Network - <a href="https://developer.mozilla.org/en-US/docs/Web">MDN</a> and <a href="https://www.w3schools.com/">W3Schools</a>. 
              This source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
              <br />Copyright &copy; 2015 - <GetCurrentYear /> | All rights reserved.

            </p>

            <p>
              <NavLink to="/">Home</NavLink>	<img src={Spacer} alt="" />
              <NavLink to="/services">Services</NavLink> <img src={Spacer} alt="" />
              <NavLink to="/about">About</NavLink> <img src={Spacer} alt="" />
              <NavLink to="/resources">Resources</NavLink>  <img src={Spacer} alt="" />
              <NavLink to="/contact">Contact</NavLink>
            </p>

            <div className="footernav_outer">
              <p className="footernav_inner">
                <ul id="ul-footernav">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/services">Services</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/resources">Resources</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  </ul>
              </p>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default SiteFooter