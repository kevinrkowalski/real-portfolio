import { graphql } from 'gatsby'
import React from 'react'
import Project from '../templates/Project'
import Seo from '../templates/Seo'

export default function ProjectTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark

  return (
    <Project title={frontmatter.title} images={frontmatter.images}>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
    </Project>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title,
        description,
        images {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED,
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`