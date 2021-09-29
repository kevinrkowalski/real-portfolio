import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'


const Skills = () => {
  // grab all skills icons
  const data = useStaticQuery(graphql`{
      allFile(
        filter: {relativeDirectory: {eq: "icons/skills"}, extension: {eq: "svg"}}
      ) {
        edges {
          node {
            publicURL
          }
        }
      }
  }`)

  const iconsList = data.allFile.edges.map((file, index) => <li key={index}><img className="skills-icon" src={file.node.publicURL} alt="" /></li>)

  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="pre-heading fc-white text-center">MY SKILLS</p>
        <h2 className="text-center">What I Know</h2>
        <p className="fc-white text-center">Nulla qui aut maiores sunt provident aut repudiandae nemo. Quia tenetur minus facere quis deserunt <br />voluptas. Omnis omnis aut qui velit amet.</p>
        <ul className="list-reset flex flex-wrap justify-between skills-list">
          {iconsList}
        </ul>
      </div>
    </section>
  )
}

export default Skills