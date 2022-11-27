import React from 'react'
import Location from '../../../../templates/Location'
import Spacer from '../../../../components/Spacer'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

export default function NorthbridgeMaWebDev() {
  const data = useStaticQuery(graphql`
  {
    allFile(filter: {name: {eq: "small business website"}}) {
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
    <Location
      title="Northbridge, MA Web Development"
      description="If you need a quality, easy-to-use, and good-looking website for your small to medium sized business then you've come to the right place. I offer web design and developement services for individuals and companies of all sizes."
    >
      <section className='container'>
        <Spacer padding={50} />
        <h1>
          Northbridge Massachusetts Website Design &amp; Development
        </h1>
        <GatsbyImage image={image} alt="Local business development" />
        <p>
          If you own or operate a small to medium size business in the Northbridge,
          Massachusetts area and need a website – I am here to help. Many businesses
          that are starting out rely on word of mouth to get customers. While this
          may be a sound approach, real growth comes from people being able to find
          your business. My website development and search engine optimization (SEO)
          services can get you listed on Google and other major search engines.
        </p>
        <p>
          I can assist, whether you already have a website and need it to be
          maintained, updated, or built from scratch. <Link to="/#contact">Start now!</Link>
        </p>
        <h2>
          The Process
        </h2>
        <p>
          Once I receive your request for a quote or consultation I’ll work with you
          to determine you and your business’s online needs. After that we can review
          and analyze any competitor’s websites for similar keywords, branding, and
          other marketing. From there I will complete a detailed proposal and we can
          start to begin the design process and more.
        </p>
        <h2>
          WordPress Development &amp; Maintenance
        </h2>
        <p>
          I currently have several years of experience with a variety of different
          website technologies including the popular content management system (CMS),
          WordPress. Utilizing a CMS allows you or your staff the ability to quickly
          update store hours, new sales, or other information without the need to
          call someone. WordPress and any other content management system do come
          with a small learning curve. With all websites I build, I offer an
          introductory learning experience to the platform to guide you with how to
          use it. Additionally, I also offer monthly maintenance services to keep all
          the software up to date or to make the changes so you can focus on growing
          your business.
        </p>
        <p>
          In addition to custom WordPress website development, I also have experience
          working on:
        </p>
        <ul>
          <li>
            Search Engine Optimization
          </li>
          <li>
            Website Design
          </li>
          <li>
            Content Writing
          </li>
          <li>
            Web Hosting &amp; Support
          </li>
          <li>
            Site Content Updates
          </li>
          <li>
            Maintenance Services
          </li>
          <li>
            eCommerce Stores
          </li>
        </ul>
        <h2>
          Small to Medium Business Website Builders
        </h2>
        <p>
          Many businesses rely on website builders such as Wix, Square Space,
          Elementor, and more. While these tools do make it simple to build a website
          they can also be slow to load, not be fully customizable, and troublesome
          to figure out how to work with. That being said, I do have experience
          working with these tools and they do have their uses for small or simple
          websites.
        </p>
        <h2>
          Start a Free Website Development Consultation Today
        </h2>
        <p>
          If you’re looking to increase your company’s growth with a custom website
          in Northbridge, Massachusetts you really shouldn’t wait. Getting listed on
          search engines like Google are a must for potential customers to find vital
          information about your business. Don’t let your competitors pass you by, <Link to="/#contact">reach out now</Link> and get your website designed today!
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47342.66640951845!2d-71.65019350000001!3d42.13066755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e40d95eb53180b%3A0xabf2314b4cf92502!2sNorthbridge%2C%20MA!5e0!3m2!1sen!2sus!4v1663769702153!5m2!1sen!2sus" width="600" height="400" style={{ border: 0, width: '100%' }} title="Northbridge, MA" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <Spacer padding={50} />
      </section>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Kevin Kowalski - Web Development",
          "image": "",
          "@id": "",
          "url": "https://kevinkowalski.dev/",
          "telephone": "(401) 484-1232",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Northbridge",
            "addressRegion": "MA",
            "postalCode": "01534",
            "addressCountry": "US"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        })}
      </script>
    </Location>
  )
}