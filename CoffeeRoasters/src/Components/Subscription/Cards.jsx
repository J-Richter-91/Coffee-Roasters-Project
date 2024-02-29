

export default function Cards({title, description,handleCardClick, isActive}){
    return(
        <>
                <div onClick={handleCardClick} className={`selection-card ${isActive ? 'active' : ''}`}>
                <h1 className={`selection-card-title ${isActive ? 'active' : ''}`}>{title}</h1>
                <p className={`selection-card-description ${isActive ? 'active' : ''}`}>
                    {description}
                </p>
                </div>
        </>
    )
}