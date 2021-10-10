import React from 'react'
import Helmet from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ children, title, template, description }) => {
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl
  } = site.siteMetadata

  const pageTitle = title || defaultTitle
  let pageTitleTemplate = template || titleTemplate
  const pageDescription = description || defaultDescription

  const isBrowser = typeof window !== 'undefined'
  if (isBrowser) {
    let location = useLocation()
    if (location.pathname === '/') {
      pageTitleTemplate = '%s | Web Developer & Designer'
    }
    // Remove '#' from URL
    location = location.href.split('#')[0]
  }

  return (
    <Helmet title={pageTitle} titleTemplate={pageTitleTemplate}>
      <link rel="canonical" href={location} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta name="description" content={pageDescription} />
      {children}
    </Helmet>
  )
}

Seo.defaultProps = {
  title: '',
  template: '',
  description: ''
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`

export default Seo