import React from 'react'

export function ContentContainer({ children } : {children: React.ReactNode}) {
    return (
        <div className={`w-[350px] m-auto
        
        `}>
            {children}
        </div>
    )
}