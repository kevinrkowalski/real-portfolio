import React from 'react'

import github from '../images/icons/github.svg'
import mail from '../images/icons/mail.svg'
import phone from '../images/icons/phone.svg'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <p className="pre-heading text-center">LET'S WORK TOGETHER</p>
        <h2 className="text-center">Contact Me</h2>
        <p className="text-center">I can't wait to discuss your needs for a new website. Let's chat and turn your ideas into a digital reality!</p>
        <div className="grid auto-fit contact-grid align-center justify-center">
          <form method="post" className="contact-form flex" name="Contact Form" netlify="true">
            <input type="hidden" name="form-name" value="Contact Form" />
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
            <li><a className="mtb-1 flex-inline align-center fc-gray" href="mailto:kevinrkowalski@gmail.com"><img src={mail} className="icon" alt="" /> kevinrkowalski@gmail.com</a></li>
            <li><a className="mtb-1 flex-inline align-center fc-gray" href="tel:401-484-1232‬"><img src={phone} className="icon" alt="" /> (401) 484-1232‬ </a></li>
            <li><a className="mtb-1 flex-inline align-center fc-gray" href="https://github.com/kevinrkowalski"><img src={github} className="icon" alt="" /> github.com/kevinrkowalski</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact