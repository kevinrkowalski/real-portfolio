import React from 'react'
import { Link } from 'gatsby'

import Header from '../templates/Header'
import Footer from '../templates/Footer'

const pageStyle = {
  minHeight: '50vh',
  marginTop: '12rem'
}

// markup
const NotFoundPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="text-center" style={pageStyle}>
            <h1>Ehh.. something is wrong here...</h1>
            <p>Sorry, we couldn't find that page. Maybe try heading <Link to="/" className="fw-bold">Home</Link> and trying again?</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default NotFoundPage
