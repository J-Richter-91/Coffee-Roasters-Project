export default function Modal({selections, monthlyTotal, isNull, isActive, closeModal}){
    return(
        <>
        <div className={`overlay ${isActive ? 'active' : ''}`}></div>
        <div className={`module-container ${isActive ? 'active' : ''}`}>
            <div className="title-container">
                <h1 className="module-title">Order Summary</h1>
            </div>
            <div className="module-text-container">
            <p className='order-summary-title'>Order Summary</p>
            <p className='modal-summary-text'>“I drink my coffee {`${selections.preferences === null || selections.preferences === 'Capsules' ? 'using ' : 'as '}`} 
            <span className='cyan-text'>{`${selections.preferences || 'Capsules'}`}</span>,
            with a <span className='cyan-text'>{`${selections.beanType || '_____'}`} </span> 
            type of bean. <span className='cyan-text'>{`${selections.quantity || '____'}`}</span> ,
            {selections.grindOption !== null ? <> ground ala <span className='cyan-text'>{selections.grindOption} </span></> : ''}

             sent to me <span className='cyan-text'>{`${selections.deliveries || '____'}`}</span>.”</p>

             <p className="verify-text">
                Is this correct? You can proceed to checkout or go back to plan selection if something is off. 
                Subscription discount codes can also be redeemed at the checkout. 
            </p>
            <div className="checkout-container">
                <p className="price">${!isNull && monthlyTotal.toFixed(2)}</p>
                
                <button className="checkout-btn" onClick={closeModal}>checkout</button>
            </div>
            </div>
            
        </div>
        </>

    )
   
}