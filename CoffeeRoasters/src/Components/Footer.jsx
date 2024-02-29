import React from "react"
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <footer>
            <img src="./assets/footer-logo.png" 
            className="footer-logo"
            alt="company logo"
            />
            <div className="footer-nav-links-container">
                <Link className="footer-nav-links" to="/">Home</Link>
                <Link className="footer-nav-links" to="/about us">About Us</Link>
                <Link className="footer-nav-links" to="/create your plan">Create Your Plan</Link>
            </div>
            <div className="footer-social-links">
                <img src="./assets/icon-facebook.svg" 
                className="social-links"
                alt="facebook icon"
                />
                   <img src="./assets/icon-twitter.svg" 
                className="social-links"
                alt="facebook icon"
                />
                   <img src="./assets/icon-instagram.svg" 
                className="social-links"
                alt="facebook icon"
                />
            </div>
        </footer>
    )
}