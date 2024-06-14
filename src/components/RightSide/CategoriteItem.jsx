import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoriteItem({item: {name, img}}) {
    return (
        <li >
           <Link to={`/meals/&{name}`} className="category">
           <p>{name}</p> 
           <img src={img} alt='img meal randon' width={56}/>
           </Link>
        </li>
    )
}