import React from 'react'

interface StatsItemProps {
    imgSrc: string;
    imgAlt: string;
    value: string | number;
}

export function StatsItem({ imgSrc, imgAlt, value}: StatsItemProps) {
    return (
        <div className='inline-grid grid-cols-1 grid-rows-2 border border-main-2'>
            <div className='border-b border-main-2'><img src={imgSrc} alt={imgAlt}/></div>
            <div>{value}</div>
        </div>
    )
}