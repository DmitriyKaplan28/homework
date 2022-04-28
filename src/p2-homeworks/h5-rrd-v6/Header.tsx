import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'


function Header() {
    return (
        <div className={s.defaultHeader}>
            <NavLink to={'/pre-junior'} className={s.links}>pre-junior</NavLink>
            <NavLink to={'/junior'} className={s.links}>junior</NavLink>
            <NavLink to={'/junior-plus'} className={s.links}>junior+</NavLink>

        </div>
    )
}
export default Header




