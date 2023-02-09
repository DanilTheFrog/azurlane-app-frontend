import React, { useState } from 'react'

interface InputProps {
    title?: string;
    placeholder: string;
    id: string;
    name: string;
    type?: string;
    value?: string | number;
    validator?: (val: string) => boolean;
    inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({title, placeholder, id, name, inputHandler, type, value, validator}: InputProps) {

    const [val, setVal] = useState(value || '')
    const [valid, setValid] = useState(false)
    const classes: string = "block py-1 px-4 border-2 mb-2 w-full outline-0 ";

    

    const handler =(e: React.ChangeEvent<HTMLInputElement>) => {
        
        setVal(e.target.value)
        inputHandler(e)
        if(!validator) return
        setValid(validator(e.target.value))
     
        
        
    }

    return (
        <>
            {title && <label className="block mt-6 text-black/70" htmlFor={id}>{title}</label>}
            <input 
            type={type ? type : "text"}
            autoComplete={"off"}
            className={classes + (!validator? 'border-main-1': valid? 'border-green-500' : 'border-red-500')}  
            name={name} 
            id={id}
            value={val}
            onChange={(e)=>handler(e)}
            placeholder={placeholder}

            />
        </>
    )
}