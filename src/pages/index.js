import React from 'react'
import Seo from '../templates/Seo'

import Header from '../templates/Header'
import Footer from '../templates/Footer'
import Hero from '../templates/Hero'
import Skills from '../templates/Skills'
import Work from '../templates/Work'
import Contact from '../templates/Contact'

// styles
import '../scss/index.scss'

// markup
const IndexPage = () => {
  return (
    <>
      <Seo title="Kevin Kowalski">
        <meta name="description" content="Kevin Kowalski is a web designer and developer for hire. Check out some of my latest work or reach out and start a project!" />
      </Seo>
      <Header />
      <main>
        <Hero />
        <hr className="hero-divider" />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
