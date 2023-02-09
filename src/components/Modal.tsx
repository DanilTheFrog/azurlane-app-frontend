import React from 'react'

interface ModalProps {
    children: React.ReactNode;
    onClose: ()=>void
}

//шаблон модального окна без внутренних элементов и логики
// логика и внутренние элементы предоставляются дочерним элементом

export function Modal( {children, onClose} : ModalProps ) {
    return (
        <>
            <div onClick={onClose} className='fixed top-0 left-0 right-0 bottom-0 bg-black/50'></div>  
            <div className='fixed w-[600px] bg-white rounded top-10 left-1/2 -translate-x-1/2 p-4'>
                <h1>Modal</h1>
                {children}
            </div>
        </>
    )
}