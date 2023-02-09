import React, { useState } from 'react'
import { IFilter } from '../models'

interface SortProps {
    options: IFilter;
    onSort: (val: string)=>void;
}


//функционал не реализован до конца
//нужно поднять категорию нужной фильтрации, чтобы потом перерисовать в нужном порядке фильтруемые элементы

export function Sort({options, onSort}: SortProps) {
    const [value, setValue] = useState('rarity');

    const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>)=> {
        event.preventDefault();
        setValue(event.target.value)
        onSort(event.target.value);

    }

    return (
        <div className='flex flex-col items-center w-[160px]'>
            <p className='text-center text-white text-xl'>{options.name}</p>
            <select
            className='px-2 py-1 text-xl outline-0'
            name={options.name} id={options.name} value={value}
            onChange={changeHandler}
            >
                
                {options.values.map((item)=>{
                    return (
                        <option value={item} key={item}>{item}</option>
                    )
                })}
            </select>
        </div>
    )
}