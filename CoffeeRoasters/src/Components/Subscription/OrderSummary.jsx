import React from 'react'

export default function OrderSummary({selections}){
    return (
        <div className="order-summary-container">
        <div className="order-text-summary-wrapper">
            <p className='order-summary-title'>Order Summary</p>
            <p className='order-summary-text'>“I drink my coffee {`${selections.preferences === null || selections.preferences === 'Capsules' ? 'using' : 'as'}`} <span className='cyan-text'>{`${selections.preferences || 'Capsules'}`}</span>,
            with a <span className='cyan-text'>{`${selections.beanType || '_____'}`} </span> 
            type of bean. <span className='cyan-text'>{`${selections.quantity || '____'}`}</span> ,
            {selections.grindOption !== null ? <> ground ala <span className='cyan-text'>{selections.grindOption} </span></> : ''}

             sent to me <span className='cyan-text'>{`${selections.deliveries || '____'}`}</span>.”</p>
        </div>
    </div>
    )
}