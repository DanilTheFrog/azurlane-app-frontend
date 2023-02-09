import React from 'react'

interface Tab {
    title: string,
    value: string
}

interface TabsProps {
    tabs: Tab[],
    clickHandler(e: React.MouseEvent<HTMLDivElement>, value: string): void
}

export function Tabs({tabs, clickHandler} : TabsProps) {
    return (
        <div className='w-full flex items-center gap-3'>
            {tabs.map((tab) => {
                return (
                    <div 
                    className='w-[200px] py-3 px-4 shadow-sm border-2 border-blue-400 text-center'
                    onClick={(e)=>clickHandler(e, tab.value)}
                    data-value={tab.value}
                    key={tab.value}>
                        <span>{tab.title}</span>
                    </div>
                )
            })}
        </div>
    )
}