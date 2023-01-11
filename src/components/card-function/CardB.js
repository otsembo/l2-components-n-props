import React from "react";

function CardB({ image, name, role, age }){
    return (
        <div className="card">
        <img src={image} alt="avatar" className="image"/>
        <div className="container">
            <h4><b>{name}</b></h4>
            <p>{role}</p>
        </div>
        <p>{age}</p>
    </div>
    )
}

export default CardB