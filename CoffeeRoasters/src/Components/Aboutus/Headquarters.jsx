export default function Headquarters({logo, country, street, state, region, phone}){
    return(
        <>
            <div className="headquarters-card-container">
                        <img src={logo} />
                        <h1 className="headquarters-card-title">{country}</h1>
                        <p className="street">{street}</p>
                        <p className="state">{state}</p>
                        <p className="region">{region}</p>
                        <p className="phone">{phone}</p>
                    </div>
        </>
    )
}