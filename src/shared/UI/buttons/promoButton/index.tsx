import React from 'react'
import { Link } from 'react-router-dom';

interface PromoButtonProps {
    text: string;
    type: 'link' | 'button'
    to?: string;
    onClick?: ( )=>void;
}

export function PromoButton({text, onClick, type, to}: PromoButtonProps) {
    const classes = `
    bg-gradient-to-r from-[#18234D] via-[#4F52A6] to-[#877CB5]
    shadow-[0_0_9px_rgba(255,255,255,0.58)]
    flex justify-center items-center rounded-full
    h-[35px] w-[220px] text-sm text-white
    mt-4 mb-4 
    md:h-[55px] md:w-[260px] md:text-lg
    lg:h-20 lg:w-[300px] lg:text-xl
    `

    if(type === 'link' && to) {
        return (<Link className={classes} to={to}><span>{text}</span></Link>)
    } else if(type==="button" && onClick) {
        return (
            <button tabIndex={0} className={classes}
            onClick={onClick}>
                <span>{text}</span>
            </button>
        )
    }
    return (<div className={classes}></div>)

}