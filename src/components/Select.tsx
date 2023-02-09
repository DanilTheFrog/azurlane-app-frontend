import React, { useState } from 'react'

interface IOption {
    [key: string]: string | number;
    title: string,
    value: string
}

interface SelectProps {
    options: IOption[],
    label?: string,
    name: string,
    id: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export function Select({options, onChange, name, id, label} : SelectProps) {
    const [value, setValue] = useState(options[0].value);

    const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value)
        onChange(e)
    }

    return (
        <>
            <label className='block mt-6 text-black/70'>{label}</label>
            <select
            className='block py-1 px-4 border-2 mb-2 w-full border-main-2'
            name={name} id={id} value={value}
            onChange={changeHandler}
            >
                
                {options.map((item)=>{
                    return (
                        <option value={item.value} key={item.value}>{item.title}</option>
                    )
                })}
            </select>
        </>
    )
}