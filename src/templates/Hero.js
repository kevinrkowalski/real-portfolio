import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import cirlceArrow from '../images/icons/circle-arrow.svg'

const Hero = () => {
  const data = useStaticQuery(graphql`
  {
    allFile(filter: {name: {eq: "Kevin-desaturated"}}) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(formats: [AUTO, WEBP, AVIF], placeholder: BLURRED)
          }
        }
      }
    }
  }`)

  const image = getImage(data.allFile.edges[0].node)

  return (
    <section>
      <div className="container">
        <div className="hero grid auto-fit align-center">
          <div>
            <h1>Hello!<br /><span className="highlight"><span className="fw-normal"><i>I'm</i></span> Kevin Kowalski</span></h1>
            <p className="fs-large fw-semi-bold fc-black">Developer, Marketer, & Technology Enthusiast</p>
            <p>Hi! I'm a web devleoper with a love of making websites for people and businesses alike. I currently work for a law firm updating and maintaining their website on a daily basis. I love to transform ideas into fully featured websites that make heads turn.</p>
            <p>Ready to start a project together?</p>
            <p><Link to="/#contact" className="line-after flex-inline align-center"><img src={cirlceArrow} className="icon" alt="" />LET'S TALK</Link></p>
          </div>
          <div className="justify-self-end">
            <div className="hero-image-container">
              <GatsbyImage image={image} alt="Kevin Kowalski" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero