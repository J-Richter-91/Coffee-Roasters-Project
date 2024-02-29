import React from "react"
import { useState } from "react"
import { Link} from "react-router-dom"


export default function Header(){
  const [mobileMenuActive, setMobileMenuActive] = useState(false)

function handleHamburgerMenuClick(){
  setMobileMenuActive(prevState => !prevState)
 
}
console.log(mobileMenuActive)

    return (
      <>
        <header>
        <img src="./assets/CoffeeRoasters-Logo.png" 
        alt="logo" className="logo"
        />
        <nav>
          <Link className="nav-links" to="/">Home</Link>
          <Link className="nav-links" to="about us">About Us</Link>
          <Link className="nav-links" to="create your plan">Create Your Plan</Link>
        </nav>
        <div className="mobile-menu">
        <img 
        className="hamburger-icon"
        src={`${!mobileMenuActive ? './assets/hamburger.png' : './assets/close.png'}`}
        alt='hamburger-icon'
        onClick={handleHamburgerMenuClick}
        />
        
        </div>
       
     </header>
     <div className={`mobile-link-container ${mobileMenuActive ? 'active' : ''}`}>
          <Link 
          className={`mobile-nav-links ${mobileMenuActive ? 'active' : ''}`} 
          onClick={handleHamburgerMenuClick}
          to="/">Home</Link>
          <Link className={`mobile-nav-links ${mobileMenuActive ? 'active' : ''}`} 
          onClick={handleHamburgerMenuClick}
          to="/about us">About Us</Link>
          <Link 
          className={`mobile-nav-links ${mobileMenuActive ? 'active' : ''}`}
          onClick={handleHamburgerMenuClick}
          to="/create your plan"
          >Create Your Plan</Link>
      </div>
     </>
    )
}
