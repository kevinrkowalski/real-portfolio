import React from 'react'
import { Link } from 'gatsby'

// images
import cirlceArrow from '../images/icons/circle-arrow.svg'

const Footer = () => (
    <footer className="footer">
        <div className="container flex justify-between">
            <p>&copy; Kevin Kowalski</p>
            <p><Link to="#" className="flex-inline align-center">Back to Top <img src={cirlceArrow} className="icon footer-arrow" alt="" /></Link></p>
        </div>
    </footer>
)

export default Footer