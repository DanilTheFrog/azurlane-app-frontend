import React from 'react'
import { ICharacter } from '../models'

// дочерний компонент <Card/>
// предоставляет логику открытия модального окна с информацией о персонаже

interface CharacterProps {
    character: ICharacter;
}

export function Character({ character }: CharacterProps) {
    return (
        <img className="rounded" src={character.image} alt={character.name} />
    )
}