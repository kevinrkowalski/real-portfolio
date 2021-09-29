import React from "react"
import { Link } from "gatsby"
import Header from '../templates/Header'
import Footer from '../templates/Footer'
import Skills from '../templates/Skills'

// styles
import '../scss/index.scss'

// images
import cirlceArrow from '../images/icons/circle-arrow.svg'
import github from '../images/icons/github.svg'
import mail from '../images/icons/mail.svg'
import phone from '../images/icons/phone.svg'
import kevin from '../images/Kevin-desaturated.jpg'
import kristynSite from '../images/kristyn-site.png'
import midManMed from '../images/projects/midmanmed-desktop.jpg'

// markup
const IndexPage = () => {
  return (
    <main>
      <Header />
      <section>
        <div className="container">
          <div className="hero grid auto-fit align-center">
            <div>
              <h1>Hello!<br/><span className="highlight"><span className="fw-normal"><i>I'm</i></span> Kevin Kowalski</span></h1>
              <p className="fs-large fw-semi-bold fc-black">Developer, Marketer, & Technology Enthusiast</p>
              <p>Nulla qui aut maiores sunt provident aut repudiandae nemo. Quia tenetur minus facere quis  deserunt voluptas. Omnis omnis aut qui velit amet. Cupiditate esse recusandae quidem adipisci consectetur inventore qui. Id sapiente ullam voluptatem et vel.</p>
              <p>Tempora omnis minima magnam sapiente necessitatibus nisi vel quo.</p>
              <p><a href="/#" className="line-after flex-inline align-center"><img src={cirlceArrow} className="icon" alt="" />LEARN MORE</a></p>
            </div>
            <div className="justify-self-end">
              <div className="hero-image-container">
                <img className="justify-self-end" src={kevin} alt="Kevin Kowalski" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="hero-divider" />
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
              <p>Nulla qui aut maiores sunt provident aut repudiandae nemo. Quia tenetur minus facere quis  deserunt voluptas. Omnis omnis aut qui velit amet. Cupiditate esse recusandae quidem adipisci consectetur inventore qui. Id sapiente ullam voluptatem et vel.</p>
              <p>Tempora omnis minima magnam sapiente necessitatibus nisi vel quo.</p>
              <Link className="btn btn--gray-light fc-gray" to="/projects/therapy-website">READ MORE</Link>
            </div>
          </div>
          <div className="portfolio-item portfolio-item--reverse grid auto-fit align-center">
            <div className="portfolio-item-text">
              <h3>Medical Equipment Sales Web Design & Development</h3>
              <p>Nulla qui aut maiores sunt provident aut repudiandae nemo. Quia tenetur minus facere quis  deserunt voluptas. Omnis omnis aut qui velit amet. Cupiditate esse recusandae quidem adipisci consectetur inventore qui. Id sapiente ullam voluptatem et vel.</p>
              <p>Tempora omnis minima magnam sapiente necessitatibus nisi vel quo.</p>
              <a className="btn btn--gray-light fc-gray" href="/#">READ MORE</a>
            </div>
            <div className="portfolio-item-image">
              <img className="shadow" src={midManMed} alt="" />
            </div>
          </div>
          <div className="portfolio-item grid auto-fit align-center">
            <div className="portfolio-item-image">
              <img className="shadow" src={kristynSite} alt="" />
            </div>
            <div className="portfolio-item-text">
              <h3>Therapist Web Design <br />& Development</h3>
              <p>Nulla qui aut maiores sunt provident aut repudiandae nemo. Quia tenetur minus facere quis  deserunt voluptas. Omnis omnis aut qui velit amet. Cupiditate esse recusandae quidem adipisci consectetur inventore qui. Id sapiente ullam voluptatem et vel.</p>
              <p>Tempora omnis minima magnam sapiente necessitatibus nisi vel quo.</p>
              <a className="btn btn--gray-light fc-gray" href="/#">READ MORE</a>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <section className="contact" id="contact">
        <div className="container">
          <p className="pre-heading text-center">LET'S WORK TOGETHER</p>
          <h2 className="text-center">Contact Me</h2>
          <p className="text-center">Nulla qui aut maiores sunt provident aut repudiandae nemo. Quia tenetur minus facere quis deserunt <br />voluptas. Omnis omnis aut qui velit amet.</p>
          <div className="grid auto-fit contact-grid align-center justify-center">
            <form className="contact-form flex">
              <div className="input-container">
                <input type="text" id="name" name="name" placeholder=" " />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-container">
                <input type="email" id="email" name="email" placeholder=" " />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-container">
                <textarea id="message" name="message" placeholder=" "></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <button type="submit">LET'S TALK</button>
            </form>
            <ul className="contact-list list-reset">
              <li><a className="mtb-1 flex-inline align-center fc-gray" href="mailto:kevinrkowalski@gmail.com"><img src={github} className="icon" alt="" /> kevinrkowalski@gmail.com</a></li>
              <li><a className="mtb-1 flex-inline align-center fc-gray" href="tel:860-575-6189"><img src={mail} className="icon" alt="" /> (860) 575-6189</a></li>
              <li><a className="mtb-1 flex-inline align-center fc-gray" href="https://github.com/link-here"><img src={phone} className="icon" alt="" /> github.com/link-here</a></li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default IndexPage
