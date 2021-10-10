import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

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
                    <li className="brand"><Link to="/">Kevin K.</Link></li>
                    <li className={toggleClass()}><Link onClick={handleClick} to="/#work">MY WORK</Link></li>
                    <li className={toggleClass()}><Link onClick={handleClick} to="/#skills">SKILLS</Link></li>
                    <li className={toggleClass()}><Link onClick={handleClick} to="/#contact">CONTACT</Link></li>
                </ul>
            </nav>
            {isMobile &&
                <button className="menu-icon" onClick={handleClick}><img src={open ? closeIcon : menuIcon} alt={`${open ? 'closed' : 'open'} menu icon`} /></button>
            }
        </header>
    )
}

export default Header