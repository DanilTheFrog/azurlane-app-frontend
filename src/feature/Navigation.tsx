import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from 'hooks/useAuth';

import logo from 'shared/images/logo.png';




export function Navigation() {
    const {isAuth} = useAuth()
    const defaultLinkClasses = "mr-4"
    const activeLinkClasses = "border-b-2 border-main-light mr-4"

    const navLinkClass = ({isActive}: {isActive:boolean}) => isActive ? activeLinkClasses : defaultLinkClasses;

    return (
        <nav
        className='flex  items-center justify-around w-full top-0 left-0 right-0 bg-main-1 text-white
        h-[42px] text-xs
        sm:text-xl
        md:text-xl sm:h-[60px]
        fixed mb-5
        z-10
        '
        
        >
            <Link  className='' to="/">
                <img src={logo} alt="" />
            </Link>

            <p className='hidden md:block '>
                <NavLink  className={({isActive})=>isActive && window.location.pathname === "/" ? activeLinkClasses : defaultLinkClasses} to="/">Главная</NavLink>
                <NavLink to="/news" className={navLinkClass}>Новости</NavLink>
                <NavLink to="/guides" className={navLinkClass}>Гайды</NavLink>
                <NavLink to="/lore" className={navLinkClass}>Лор</NavLink>
                <NavLink to="/characters" className={navLinkClass}>Персонажи</NavLink>
                <NavLink to="/items" className={navLinkClass}>Шмот</NavLink>
                <NavLink className={navLinkClass} to="/about">About</NavLink>
                {isAuth && <NavLink className={navLinkClass} to="/admin">Admin</NavLink>}
                
            </p>

            <p></p>
        </nav>
    )
}