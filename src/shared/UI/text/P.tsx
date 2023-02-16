import React from 'react'

interface PProps {
    children: React.ReactNode;
    margin?: boolean;
}

export function P({ children, margin }: PProps) {
    let marginStyles: string = ""
    if(margin) {
        marginStyles = " mt-2 mb-2";
    }

    return (
        <p className={`w-full text-xs
        sm:text-sm xl:text-xl
        `+marginStyles}>
            {children}
        </p>
    )
}