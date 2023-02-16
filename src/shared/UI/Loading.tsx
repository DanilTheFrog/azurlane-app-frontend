import React, { FC } from 'react'

export const Loading:FC = () => {
    return(
        <div className='w-[100px] h-[100px] flex items-center justify-between animate-spin'>
            <div className='w-[20px] h-[20px] rounded-full bg-main-1'></div>
            <div className='w-[20px] h-[20px] rounded-full bg-main-1'></div>
        </div>
    )
}