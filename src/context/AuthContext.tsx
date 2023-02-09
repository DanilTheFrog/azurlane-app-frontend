import { createContext, useState } from "react";
import API from "../api";

interface IAuthContext {
    isAuth: boolean;
    auth: (email: string, password: string) => void;
    unAuth: () => void;
}

export const AuthContext = createContext<IAuthContext>({
    isAuth: false,
    auth: (email: string, password: string)=>{},
    unAuth: () => {}
})

export function AuthState({children}: {children: React.ReactNode}) {
    const [isAuth, setIsAuth] = useState<boolean>(API.checkAuth());

    const auth = (email:string, password: string) => {
        API.login(email, password).then(()=>{
            if(API.checkAuth()) setIsAuth(true);
        })
    }

    const unAuth = () => {
        if(API.checkAuth()) localStorage.removeItem('token');
        setIsAuth(false)
    }

    return (<AuthContext.Provider value={{isAuth, auth, unAuth}}>
        {children}
    </AuthContext.Provider>)
}