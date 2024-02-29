export default function Panel({question, handleClick, isActive, children, disabled}){
    return(
        <>
            <div onClick={!disabled ? handleClick : undefined} className="selection-question-container">
                <h1 className={`selection-question ${disabled ? 'disabled' : ''}`}>{question}</h1>
               <img className="down-arrow" src={`${isActive ? './assets/Createplan/up-arrow.png' : './assets/Createplan/down-arrow.svg'} `} />
                </div>
                {isActive ? children : ''}
        </>
    )
}