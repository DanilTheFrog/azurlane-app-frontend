import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

import { H } from '../components/H'



export function AdminPage() {


 
    return (
        <div className='w-full'>
            <H type="2">Admin Tool</H>
            <p className='m-auto flex justify-center items-center gap-8 text-xl'>
                <NavLink className={({isActive})=> isActive ? "border-b-2 border-main-1" : ""} to="character">Добавить персонажа</NavLink>
                <NavLink className={({isActive})=> isActive ? "border-b-2 border-main-1" : ""} to="item">Добавить предмет</NavLink>
            </p>
            <div className='w-[1200px] border-2 border-main-1 p-4 mx-auto mt-5'>
                <Outlet/>
            </div>
        </div>
    )
}