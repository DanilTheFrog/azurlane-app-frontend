import React, {createContext, useState} from 'react'

interface IModalContext {
    modal: boolean;
    open: (data? :any)=>void;
    close: ()=>void;
}

export const ModalContext = createContext<IModalContext>({
    modal: false,
    open: ()=>{},
    close: ()=>{},
});

export function ModalState({children}: {children: React.ReactNode}) {
    const [modal, setModal] = useState(false);

    const open = ()=> setModal(true);
    const close = ()=> setModal(false);
    

    return (
        <ModalContext.Provider value={{modal, close, open}}>
            {children}
            
        </ModalContext.Provider>
    )
}