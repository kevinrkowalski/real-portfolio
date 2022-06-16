import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Header from './Header'
import Footer from './Footer'

const Project = ({ children, title, images }) => {
    // const imageData = getImage(image)
    const settings = {
        adaptiveHeight: true,
        autoplay: true,
        infinite: true
    }
    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="container">
                        <div className="project">
                            <h1 className="highlight">{title}</h1>
                            <div className="project-content">
                                {children}
                            </div>
                            <Slider {...settings}>
                                {images.map(image => <GatsbyImage image={getImage(image)} alt="" />)}
                            </Slider>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Project