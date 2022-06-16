import React from 'react'
import { Link } from 'gatsby'

import kristynSite from '../images/projects/therapy-website/kristyn-site.png'
import midManMed from '../images/projects/midmanmed/midmanmed-desktop.jpg'
import strategy360 from '../images/projects/strategy-360/strategy-360-desktop.jpg'

const Work = () => {
  return (
    <section id="work">
      <div className="container">
        <p className="pre-heading fc-gray">MY PORTFOLIO</p>
        <h2 className="portfolio-heading">Previous Work</h2>
        <div className="portfolio-item grid auto-fit align-center">
          <div className="portfolio-item-image">
            <img className="shadow" src={kristynSite} alt="" />
          </div>
          <div className="portfolio-item-text">
            <h3>Therapist Web Design <wbr />& Development</h3>
            <p>This website was needed by a Therapist looking to grow her online presence. She had never had a website before and was looking to present information to new potential clientel in a friendly and inviting way.</p>
            <Link className="btn btn--gray-light fc-gray" to="/projects/therapist-website/">READ MORE</Link>
          </div>
        </div>
        <div className="portfolio-item portfolio-item--reverse grid auto-fit align-center">
          <div className="portfolio-item-text">
            <h3>Medical Equipment Sales Web Design & Development</h3>
            <p>This site was created for a medical sales professional who had previously only been selling products through catalogs. He wanted the site to feel fun and lighthearted, while still being professional and clean.</p>
            <Link className="btn btn--gray-light fc-gray" to="projects/medical-supplies-website/">READ MORE</Link>
          </div>
          <div className="portfolio-item-image">
            <img className="shadow" src={midManMed} alt="" />
          </div>
        </div>
        <div className="portfolio-item grid auto-fit align-center">
          <div className="portfolio-item-image">
            <img className="shadow" src={strategy360} alt="" />
          </div>
          <div className="portfolio-item-text">
            <h3>Business Website Rebuild</h3>
            <p>This website was completely non-functional and was showing PHP errors when I was brought in to restore it to it's previous state. The website was built with a completely custom WordPress theme.</p>
            <Link className="btn btn--gray-light fc-gray" to="projects/strategy-360/">READ MORE</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work