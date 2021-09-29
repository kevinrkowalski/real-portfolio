import React, { useState, useEffect } from "react"

// images
import menuIcon from '../images/icons/menu.svg'
import closeIcon from '../images/icons/close.svg'

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768 ? true : false)
    const [open, setOpen] = useState(!isMobile)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768 ? true : false)
            setOpen(isMobile ? false : true)
        }
        window.addEventListener('resize', handleResize)
        return () => { window.removeEventListener('resize', handleResize) }
    })

    const handleClick = () => {
        if (isMobile) {
            setOpen(!open)
        }
    }

    const toggleClass = () => {
        if (isMobile && open === false) {
            return 'hidden'
        }
        return null
    }

    return (
        <header className="header">
            <nav className="main-nav">
                <ul className="list-reset flex align-center">
                    <li className="brand"><a href="/#">Kevin K.</a></li>
                    <li className={toggleClass()}><a onClick={handleClick} href="#work">MY WORK</a></li>
                    <li className={toggleClass()}><a onClick={handleClick} href="#about">ABOUT</a></li>
                    <li className={toggleClass()}><a onClick={handleClick} href="#contact">CONTACT</a></li>
                </ul>
            </nav>
            {isMobile &&
                <button className="menu-icon" onClick={handleClick}><img src={open ? closeIcon : menuIcon} alt={`${open ? 'closed' : 'open'} menu icon`} /></button>
            }
        </header>
    )
}

export default Header