import React from 'react'

// images
import cirlceArrow from '../images/icons/circle-arrow.svg'

const Footer = () => (
    <footer className="footer">
        <div className="container flex justify-between">
            <p>&copy; Kevin Kowalski</p>
            <p><a href="/#" className="flex-inline align-center">Back to Top <img src={cirlceArrow} className="icon footer-arrow" alt="" /></a></p>
        </div>
    </footer>
)

export default Footer