import React from 'react'
import unknownImage from '../images/unknown.jpg'

interface ListElementProps {
    title: string,
    text: string,
    image?: string,
    type?: string,
}

export function ListElement({title, text, type, image} : ListElementProps)  {
    const bgrClasses = ['flex justify-between items-center max-w-[800px] p-1']

    switch(type) {
        case 'Offensive':
        bgrClasses.push('bg-red-500')
        break;

        case 'Defensive':
        bgrClasses.push('bg-blue-400')
        break;

        case 'Support':
        bgrClasses.push('bg-yellow-400')
        break;

        default:
        bgrClasses.push('');
    }
    return (
        <div className={bgrClasses.join(" ")}>
            <img className="w-[64px]" src={image? image : unknownImage} alt="Изображение скилла" />

            <div className='w-full ml-2 h-full '>
                <p className='font-bold'>{title}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}