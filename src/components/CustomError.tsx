import React from 'react'

export function CustomError({msg}: {msg?: unknown}) {
    return (
        <div className='m-auto text-xl text-red-500'>
            <h1 className="text-center">Упс, произошла ошибочка</h1>
            <p className="text-center">{`${msg}`}</p>
        </div>
    )
}