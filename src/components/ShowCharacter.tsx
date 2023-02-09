import React from 'react'
import { ICharacter } from '../models'

interface ShowProps {
    character?: ICharacter;
}

export function ShowCharacter({character}: ShowProps) {
    return (
        <div>
            {
                character ? ( <><h1>{character.name}</h1>
                <img className='mauto' src={character.image} alt="character.name" /> </>) : "I Show You Character Info"
            }

        </div>
    )
}