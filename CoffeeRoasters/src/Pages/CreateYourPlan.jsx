import React from "react"
import Accordion from "../Components/Subscription/Accordion"
import Modal from '../Components/Subscription/Modal'
import '../Styles/create.css'

export default function CreateYourPlan(){
 

   
    return(
        <>
            
            <div className="create-your-plan-hero-container">
                
                <div className="create-plan-hero-text-container">
                    <h1 className="create-hero-title">Create a plan</h1>
                    <p className="create-hero-description">Build a subscription plan that best fits your needs. 
                    We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.
                    </p>
                
                </div>
            </div>
            <div className="how-it-works-container-create-page">
                <div className="create-plan-ovals-container">
                        <div className="create-plan-page-oval"></div>
                        <div className="create-plan-page-oval"></div>
                        <div className="create-plan-page-oval"></div>
                </div>
                <div className="create-page-how-it-works-card-wrapper">
                    <div className="create-page-how-it-works-card-container">
                        <h1 className="create-page-card-number">01</h1>
                        <h2 className="create-page-card-title">Pick your coffee</h2>
                        <p className="create-page-card-description">Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
                    </div>
                    <div className="create-page-how-it-works-card-container">
                        <h1 className="create-page-card-number">02</h1>
                        <h2 className="create-page-card-title">Choose the frequency</h2>
                        <p className="create-page-card-description">Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
                    </div>    
                    <div className="create-page-how-it-works-card-container">
                        <h1 className="create-page-card-number">03</h1>
                        <h2 className="create-page-card-title">Receive and enjoy!</h2>
                        <p className="create-page-card-description">We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
                    </div>        
                </div>    
            </div>
            <Accordion />
        </>
    )
}