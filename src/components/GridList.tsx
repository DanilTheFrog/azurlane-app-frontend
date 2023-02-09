import React from 'react'

export function GridList({title, children} : {title?: string, children:React.ReactNode}) {
    return (
    <div className='bg-pink-300 p-2'>
        {title && <h4 className='w-full text-center border-b text-lg border-white'>{title}</h4>}
        {children}
    </div>
    )
}