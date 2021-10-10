import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Header from './Header'
import Footer from './Footer'

const Project = ({ children, title, image }) => {
    const imageData = getImage(image)
    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="container">
                        <div className="project">
                            <h1 className="highlight">{title}</h1>
                            <GatsbyImage image={imageData} alt={title} />
                            <div className="project-content">
                                {children}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Project