import React from 'react'

export default function CategoriteItem({item: {name, img}}) {
    return (
        <li calssName="container">
            <p>{name}</p> <img src={img} alt='img meal randon' width={56}/>
        </li>
    )
}