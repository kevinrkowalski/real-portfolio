import React from 'react'
import { Link } from 'gatsby'

import kristynSite from '../images/projects/kristyn-site.png'
import midManMed from '../images/projects/midmanmed-desktop.jpg'

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
            <h3>Therapist Web Design <br />& Development</h3>
            <p>This website was needed by a Therapist looking to grow her online presence. She had never had a website before and was looking to present information to new potential clientel in a friendly and inviting way.</p>
            <Link className="btn btn--gray-light fc-gray" to="/projects/therapist-website">READ MORE</Link>
          </div>
        </div>
        <div className="portfolio-item portfolio-item--reverse grid auto-fit align-center">
          <div className="portfolio-item-text">
            <h3>Medical Equipment Sales Web Design & Development</h3>
            <p>This site was created for a medical sales professional who had previously only been selling products through catalogs. He wanted the site to feel fun and lighthearted, while still being professional and clean.</p>
            <Link className="btn btn--gray-light fc-gray" to="projects/medical-supplies-website">READ MORE</Link>
          </div>
          <div className="portfolio-item-image">
            <img className="shadow" src={midManMed} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work