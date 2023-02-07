import React, {useState} from 'react';


function HogCard({name, specialty, greased, weight, medal, image}){
    const [isClicked, setIsClicked] = useState(false);
    function handleClick(){setIsClicked(isClicked => !isClicked)}
    // console.log(weight)
    return(
        <div className="ui card eight wide column pigTile" onClick= {handleClick}>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            {isClicked ? 
            <div>
                <h3>Specialty: {specialty}</h3>
                <h3>Weight: {weight}</h3>
                <h3>How Greasy am I: {greased === true ? "Very" : "Squeaky Clean"}</h3>
                <h3>Highest Medal Achieved: {medal}</h3>
            </div>: null}
        </div>
    )
}

export default HogCard;