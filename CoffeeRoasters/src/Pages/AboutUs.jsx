import React from "react"
import { headquarters } from "../data"
import Headquarters from "../Components/Aboutus/Headquarters"
import "../Styles/aboutus.css"

export default function AboutUs(){
    
    return(
        <>
             <div className="about-us-hero-container">
                <div className="about-us-hero-text-container">
                    <h1 className="about-us-hero-title">About Us</h1>
                    <p className="about-us-hero-description">
                    Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of 
                    coffee from around the world. We have since been dedicated to bring the perfect cup - 
                    from bean to brew - in every shipment.
                    </p>
                </div>
            </div>
            <div className="our-commitment-container">
                <img className="commitment-img"
                alt="commitment-img" 
                src='./assets/Aboutus/image-commitment.jpg' />
                <div className="our-commitment-description-container">
                    <h1 className="our-commitment-title">Our commitment</h1>
                    <p className="our-commitment-description">
                        We're built on a simple mission and a commitment to doing good along the way. We want to make it easy for 
                    you to discover and brew the world's best coffee at home. It all starts at the source. To locate the specific 
                    lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities 
                    in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers 
                    through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest 
                    in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive 
                    to their native growing region.
                    </p>
                </div>
            </div>
            <div className="uncompromising-quality-container">
                <div className="uncompromising-quality-text-container">
                    <h1 className="uncompromising-quality-title">Uncompromising quality</h1>
                    <p className="uncompromising-quality-description">
                    Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a 
                    rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast 
                    date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                    </p>
                    
                </div>
                <img
                className="quality-img"
                src='./assets/Aboutus/image-quality.jpg'
                alt='quality-img'
                />
            </div>
            <div className="headquarters-container">
                <h1 className="headquarters-title">Headquarters</h1>
                <div className="headquarters-content-wrapper">
                    {headquarters.map((item, index) => (
                        <Headquarters
                        key={index}
                        logo={item.logo}
                        country={item.country}
                        street={item.street}
                        state={item.state}
                        region={item.region}
                        phone={item.phone}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}