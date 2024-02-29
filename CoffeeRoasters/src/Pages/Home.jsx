import React from "react"
import { Link } from "react-router-dom"
import '../Styles/home.css'
export default function Home(){
    return(
        <>
            <div className="hero-container">
                <div className="home-hero-text-container">
                    <h1 className="home-hero-title">Great coffee made simple.</h1>
                    <p className="home-hero-description">
                    Start your mornings with the world's best coffees. Try our expertly curated artisan 
coffees from our best roasters delivered directly to your door, at your schedule.
                    </p>
                    <button className="home-hero-btn">Create your plan</button>
                </div>
            </div>
            <main>
                <section className="collection-container">
                    <h1 className="collection-title">Our Collection</h1>
                    <div className="collection-product-row">
                        <div className="product-column-container">
                            <img className="collection-product-img" 
                            src="./assets/gran-espresso.png"
                            alt="product img" />
                            <h1 className="collection-product-title">Gran Espresso</h1>
                            <p className="collection-product-description">Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
                        </div>
                        <div className="product-column-container">
                            <img className="collection-product-img" 
                            src="./assets/gran-espresso.png" />
                            <h1 className="collection-product-title">Gran Espresso</h1>
                            <p className="collection-product-description">Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
                        </div>
                        <div className="product-column-container">
                            <img className="collection-product-img"
                            src="./assets/gran-espresso.png" />
                            <h1 className="collection-product-title">Gran Espresso</h1>
                            <p className="collection-product-description">Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
                        </div>
                        <div className="product-column-container">
                            <img className="collection-product-img"
                            src="./assets/gran-espresso.png" />
                            <h1 className="collection-product-title">Gran Espresso</h1>
                            <p className="collection-product-description">Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
                        </div>
                    </div>
                </section>
                <section className="why-choose-us-container">
                    <div className="why-choose-us-wrapper">
                        <h1 className="why-choose-us-title">Why choose us?</h1>
                        <p className="why-choose-us-description">A large part of our role is choosing which particular coffees will be featured 
                        in our range. This means working closely with the best coffee growers to give 
                        you a more impactful experience on every level.
                        </p>
                    </div>
                    </section>
                    <div className="call-to-action-cards-wrapper">
                        <div className="call-to-action-card-container">
                            <img className="call-to-action-card-icon"
                            src="./assets/coffee-bean-icon.svg"
                            alt="coffee bean icon"
                            />
                            <div className="call-to-action-text-wrapper">
                                <h2 className="call-to-action-card-title">Best quality</h2>
                                <p className="call-to-action-card-description">Discover an endless variety of the world's 
                                best artisan coffee from each of our roasters.
                                </p>
                            </div>
                        </div>
                        <div className="call-to-action-card-container">
                            <img className="call-to-action-card-icon"
                            src="./assets/gift-icon.svg"
                            alt="gift icon"
                            />
                            <div className="call-to-action-text-wrapper">
                                <h2 className="call-to-action-card-title">Exclusive benefits</h2>
                                <p className="call-to-action-card-description">Special offers and swag when you subscribe, including 30% off your first shipment.</p>
                            </div>
                        </div>
                        <div className="call-to-action-card-container">
                            <img className="call-to-action-card-icon"
                            src="./assets/free-shipping-icon.svg"
                            alt="shipping icon"
                            />
                            <div className="call-to-action-text-wrapper">
                                <h2 className="call-to-action-card-title">Free shipping</h2>
                                <p className="call-to-action-card-description">We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
                            </div>
                        </div>
                    </div>
                
                <section className="how-it-works-container">
                    <h2 className="how-it-works-title">How it works</h2>
                    <div className="ovals-container">
                        <div className="oval"></div>
                        <div className="oval"></div>
                        <div className="oval"></div>
                    </div>
                    <div className="create-your-plan-row-container">
                        <div className="create-your-plan-card">
                            <h1 className="create-your-plan-card-number">01</h1>
                            <h2 className="create-your-plan-title">Pick your coffee</h2>
                            <p className="create-your-plan-description">Select from our evolving range of artisan coffees. Our beans are ethically 
                            sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.
                            </p>
                        </div>
                        <div className="create-your-plan-card">
                            <h1 className="create-your-plan-card-number">02</h1>
                            <h2 className="create-your-plan-title">Pick your coffee</h2>
                            <p className="create-your-plan-description">Select from our evolving range of artisan coffees. Our beans are ethically 
                            sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.
                            </p>
                        </div>
                        <div className="create-your-plan-card">
                            <h1 className="create-your-plan-card-number">03</h1>
                            <h2 className="create-your-plan-title">Pick your coffee</h2>
                            <p className="create-your-plan-description">Select from our evolving range of artisan coffees. Our beans are ethically 
                            sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.
                            </p>
                        </div>
                    </div>
                    <Link className="create-plan-btn" to="create your plan">Create your plan</Link>
                </section>
            </main>
        </>
    )
}