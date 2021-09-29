import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'

const Project = ({ children, title, image }) => {
    const data = useStaticQuery(graphql`{
        allFile(
            filter: {relativeDirectory: {eq: "projects"}}) {
            edges {
                node {
                    publicURL
                }
            }
        }
    }`)

    let imageSrc = data.allFile.edges.find(( node ) => node.node.publicURL.includes(image))
    imageSrc = imageSrc.node.publicURL ?? ""

    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="container">
                        <div className="project">
                            <h1 className="highlight">{title}</h1>
                            <img className="project-img" src={imageSrc} alt="" />
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