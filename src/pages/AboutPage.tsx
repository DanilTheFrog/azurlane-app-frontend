import React from 'react'
import { StatsItem } from 'shared/UI/StatsItem'
import lck from 'shared/images/statIcons/Luck.png';

export function AboutPage() {
    return (
        <div>
            about page
            <StatsItem imgAlt='Luck' imgSrc={lck} value={30}/>
        </div>
    )
}