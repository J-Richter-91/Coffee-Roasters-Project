import React, { useState, useEffect } from 'react';
import Panel from './Panel';
import Cards from './Cards';
import { questions} from '../../data';
import OrderSummary from './OrderSummary';
import Sidebar from './Sidebar';
import Modal from './Modal'

export default function Accordion() {
    const [activePanels, setActivePanels] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0)
    const [monthlyPrice, setMonthlyPrice] = useState(null)
    const [isModalActive, setIsModalActive] = useState(false)
    const [isFormComplete, setIsFormComplete] = useState(false)
    const [prices, setPrices] = useState({
        weekly: 7.20,
        biWeekly: 9.60,
        monthly: 12.00
    })
    const [selections, setSelections] = useState({
        preferences: null,
        beanType: null,
        quantity: null,
        grindOption: null,
        deliveries: null
    });

    console.log(prices)

    function handleModalClick(){
        setIsModalActive(prevState => !prevState)
    }

    function handleSideBarIndex(index){
        setActiveIndex(index)
    }

    function handleClick(index) {
        setActivePanels(prevState => {
            if (!prevState.includes(index)) {
                handleSideBarIndex(index)
                return [...prevState.sort(), index];
            } else {
                return prevState.filter(item => item !== index);
            }
        });
        
    }
  
    

    function handleCardClick(attribute, value) {
        setSelections(prevState => ({
            ...prevState,
            [attribute]: value
        }));
    }

   console.log(selections)

   useEffect(() => {
    if(selections.quantity === '250g'){
        setPrices({
            weekly: 7.20,
            biWeekly: 9.60,
            monthly: 12.00
        })
    }
    else if(selections.quantity === '500g'){
        setPrices({
            weekly: 13.00,
            biWeekly: 17.50,
            monthly: 22.00
        })
    }
    else if(selections.quantity === '1000g'){
        setPrices({
            weekly: 22.00,
            biWeekly: 32.00,
            monthly: 42.00
        })
    }
    
    console.log(prices)
   },[selections])

   useEffect(() => {
    const orderSelectionsArray = Object.values(selections)
        const [preferences, beanType, quantity, grindOption, deliveries] = orderSelectionsArray
        console.log('Quantity:', quantity);
        console.log('Deliveries:', deliveries);
        if( quantity && deliveries === 'Every week'){
            setMonthlyPrice(prices.weekly * 4)
            console.log(monthlyPrice)
        }
        else if(quantity && deliveries === 'Every 2 weeks'){
            setMonthlyPrice(prices.biWeekly * 2)
        } else{setMonthlyPrice(prices.monthly)}
        
   },[selections, prices, monthlyPrice])

    useEffect(() => {
        //if all of the selections are made form is valid ||
        //if prefernces === capsules grind option can be null
        const orderSelectionsArray = Object.values(selections)
        const [preferences, beanType, quantity, grindOption, deliveries] = orderSelectionsArray
        const capsuleSelected = preferences  === 'Capsules' && grindOption === null

        if(capsuleSelected && [beanType, quantity, deliveries].every(val => val !== null)){
            setIsFormComplete(true)
        } else if(orderSelectionsArray.every(val => val !== null)){
            setIsFormComplete(true)
        } else{setIsFormComplete(false)}
        
    })
    


    return (
        <div className='form-container'>
             <div className="progress-container">
                {questions.map((item, index) => (
                    <Sidebar
                    key={index}
                    name={item.name}
                    index={index}
                    isActive={activeIndex === index}
                    />
                ))}
                
             </div>
            <div className="form-wrapper">
               
            {questions.map((item, index) => (
                <Panel
                    key={index}
                    question={item.question}
                    handleClick={() => handleClick(index)}
                    isActive={activePanels.includes(index)}
                    disabled={selections.preferences === 'Capsules' && index === 3}
                >
                    {activePanels.includes(index) && (
                        <div className={`selection-options-container ${activePanels.includes(index) ? 'active' : ''}`}>
                            {item.answers.map((subItem, cardIndex) => {
                                const { title, frequency, description } = subItem;
                                return (
                                
                                <Cards
                                key={cardIndex}
                                handleCardClick={() => handleCardClick(item.name, subItem.title)}
                                isActive={selections[item.name] === subItem.title}
                                title={subItem.title}
                                description={index === 4 ? `$${prices[frequency].toFixed(2)} ${subItem.description}` : subItem.description}
                                
                                >
                         
                                </Cards>
                                
                            )})}
                        </div>
                    )}
                </Panel>
            ))}
           <OrderSummary selections={selections} />
            <button onClick={handleModalClick} disabled={!isFormComplete} className={`form-btn ${!isFormComplete ? 'disabled' : ''}`}>Create my plan</button>
            </div>
            <Modal
            selections={selections}
            monthlyTotal={monthlyPrice}
            isActive={isModalActive}
            isNull={monthlyPrice === null}
            closeModal={handleModalClick}
            />
        </div>
        
    );
}


