import React from 'react'
import { ICharacter, IItem } from '../models';


// компонент карточки служит оберткой, которя задает стиль и фон, и отображает название
// дочерний элемент должен предоставлять только картинку и собственную логику

interface ICard {
    data: ICharacter | IItem;
    title: string;
    rarity: number;
    onOpen: (e?: any)=>void;
}


export function Card({title, rarity, onOpen, data}: ICard) {
    let cardStyle:string ='';
    const maxTitleLength: number = 20;


    switch(rarity) {
        case 6:
            cardStyle="bg-rarity-6";
            break;
        case 5:
            cardStyle="bg-rarity-5";
            break;
        case 4:
            cardStyle="bg-rarity-4";
            break;
        case 3:
            cardStyle="bg-rarity-3";
            break;
    }
    const wrapperClasses = ['border-2 border-gray-300 rounded-xl p-[2px]', cardStyle]


    return (
        <div className="flex flex-col items-center justify-around
        w-[70px] text-xs
        sm:w-[100px] sm:text-lg
        md:w-[120px] md:text-xl
        "

        onClick={onOpen}
        >
            <div className={wrapperClasses.join(' ')}>
                <img className="rounded" src={data.image} alt={data.name} />
            </div>
            <p>{title.length > maxTitleLength? title.slice(0, maxTitleLength)+"...": title}</p>
        </div>
    )
}