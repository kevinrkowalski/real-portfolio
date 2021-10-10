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
  const location = useLocation()
  let locationHref = ''
  if (isBrowser) {
    if (location.pathname === '/') {
      pageTitleTemplate = '%s | Web Developer & Designer'
    }
    // Remove '#' from URL
    locationHref = location.href.split('#')[0]
  }

  return (
    <Helmet title={pageTitle} titleTemplate={pageTitleTemplate}>
      <link rel="canonical" href={locationHref} />
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
        siteUrl
      }
    }
  }
`

export default Seo