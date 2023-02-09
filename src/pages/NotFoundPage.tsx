import React from 'react'

export function NotFoundPage() {
    return (
        <div className='w-full h-[70vh] flex items-center justify-center flex-col gap-12'>
            <p className='text-4xl text-main-1'>Зачем ты сюда зашел, шизоид?</p>
            <p className='text-6xl rounded-xl bg-main-1 text-white px-4 py-2'>404</p>
        </div>
    )
}