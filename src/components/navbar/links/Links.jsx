"use client"
import React, { useState } from 'react'
import style from "./link.module.css"
import NavLink from './navLink/NavLink'

const links = [
    {
        title: "Homepage",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Blog",
        path: "/blog"
    }
]

export const Links = () => {
    
    const [open, setOpen] = useState(false)

    const session = true;
    const isAdmin = true;
    return (
        <div className={style.container}>
        <div className={style.links}>
            {links.map(((link) => (
                <NavLink key={link.title} item={link} />
            )))}

            {session ? (
                <>
                    {isAdmin &&
                    <NavLink item={{ title: "Admin", path: "/admin" }} />}
                    <button className={style.logout}>Logout</button>
                </>
                )
                :
                (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )
            }

        </div>
        <button className={style.menuButton} onClick={()=>setOpen((prev)=>!prev)} >Menu</button>
        {
            open && <div className={style.mobileLinks}>
                 {links.map(((link) => (
                <NavLink key={link.title} item={link} />
                )))}

            </div>
        }
        </div>
    )
}
