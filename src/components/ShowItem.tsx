import React from 'react'
import { IItem } from '../models'

interface ShowProps {
    item: IItem | any;
}

export function ShowItem({item}: ShowProps) {
    return (
        <div>
            {
                item ? ( <><h1>{item.name}</h1>
                <img src={item.image} alt="character.name" />
                <p>{item.description}</p>
                 </>) : "I Show You Item Info"
            }
        </div>
    )
}