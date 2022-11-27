import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Seo from './Seo'

const Location = ({ children, title, description }) => {
  return (
    <>
      <Seo title={title} description={description} />
      <Header />
      <main className="post location-post">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Location