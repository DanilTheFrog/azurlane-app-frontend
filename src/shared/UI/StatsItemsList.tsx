import React from 'react'
import { StatsItem } from './StatsItem';

interface StatsItemsListProps {
    stats: object
}

const OrderOfStats:string[] = [];

export function StatsItemsList({stats}: StatsItemsListProps) {

    
    const statsArray = Object.entries(stats);
    return (
        <div>
            {statsArray.map((item)=>{
                return(
                    <StatsItem />
                )
            })}
        </div>
    )
}