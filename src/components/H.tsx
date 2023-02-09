import React from 'react'

export function H({type, children, additionalClasses}: {type: number | string, children?:React.ReactNode, additionalClasses?:string}) {
    const hClasses = "text-center text-2xl sm:text-5xl mb-5 mt-10";
    const h = "h"+type;

    return React.createElement(h, {className: hClasses+" "+additionalClasses}, children)
    
}