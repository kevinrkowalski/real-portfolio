import React from 'react'

import Header from '../../templates/Header'
import Footer from '../../templates/Footer'
import Seo from '../../templates/Seo'

import { Link } from 'gatsby'

const AreasIServe = () => {
  return (
    <>
      <Seo title="Areas I Serve" description="Areas I Serve" />
      <Header />
      <main>
        <section className="container">
          <h1>Areas I Serve</h1>
          <p>I am available to design and develop websites accross the world. Currently, I'm located in Massachusetts and serve some of the below areas.</p>
          <ul>
            <li className='fw-bold'><Link to="/areas-i-serve/massachusetts/northbridge/web-developer/">Northbridge, Massachusetts</Link></li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default AreasIServe