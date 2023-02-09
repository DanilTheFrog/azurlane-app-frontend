import React from 'react'
import successSvg from '../images/success.svg';
import errorSvg from '../images/error.svg';

interface Props {
    status: 'success' | 'error';
    msg: string
}

export function ShowFormResult({status, msg}: Props) {
    const img = status === 'success' ? successSvg : errorSvg;

    return (
        <div>
            <img className='m-auto' src={img} alt={`status ${status}`} />
            <p>{status === 'success' ? "Успешно добавлено" : "Произошла ошибка"}</p>
        </div>
    )
}