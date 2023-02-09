import React, { useState } from 'react'
import { Input } from '../components/Input'
import { useAuth } from '../hooks/useAuth'

export function AuthPage() {
    const {isAuth, auth, unAuth} = useAuth()

    const [values, setValues] = useState<{login: string, password: string}>({
        login: '',
        password: ''
    })

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        auth(values.login, values.password);
    }

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>):void => {
        e.preventDefault()
        setValues(prev=> {
            prev[e.target.id as keyof typeof prev] = e.target.value;
            return Object.assign({}, prev)
        })
    } 

    return (
        <div>
            {!isAuth?
             <form onSubmit={submitHandler} className='w-[320px] md:w-[350px] m-auto p-4'>
                <Input inputHandler={changeHandler} value={values.login} title="Login" id="login" name="login" placeholder='' />
                <Input inputHandler={changeHandler} value={values.password} type="password" title="Password" id="password" name="password" placeholder='' />
                <button className='m-auto  mt-8 bg-main-1 rounded block text-white text-xl px-6 py-3'>Войти</button>
            </form> :
            <div>
                <button
                className='m-auto  mt-8 bg-red-500 rounded block text-white text-xl px-6 py-3'
                onClick={unAuth}>
                    Выйти
                </button>
            </div> }
            
        </div>
    )
}