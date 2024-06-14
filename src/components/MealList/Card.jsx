import React from 'react'
import './Card.css'

export default function Card ({id, name, img}) {
    return (
        <>
            <div className="card" key={id}>
                <figure className="card-img">
                    <img className="meal-pic" src={img} alt="meal" />
                </figure>
                <div className="card-body">
                    <h6 className="card-title">{name}</h6>
                </div>
            </div>
        </>
    )
}