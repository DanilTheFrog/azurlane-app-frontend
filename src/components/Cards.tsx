import React from 'react'
import { ICharacter, IItem } from '../models';
//import { ICharacter } from '../models'
import { Card } from './Card';


interface CardsProps {
    cards: ICharacter[] | IItem[];
    onOpen: (data: any)=>void;
    
}


export function Cards({cards, onOpen}: CardsProps) {


    //onOpen.bind(Cards);
    return (
            <div 
            className='flex flex-wrap flex-row m-auto justify-around w-full
            gap-4
            sm:gap-6 sm:w-sm
            md:gap-8 md:w-md
            xl:gap-10 xl:w-xl
            '
            
            >
                {cards.map((card)=>{
                    return(
                        
                        <Card 
                        onOpen={()=>{onOpen(card)}} 
                        title={card.name} 
                        rarity={card.rarity}
                        data={card}
                        key={card.id}/>

                    )
                })}
            </div>
    )
}