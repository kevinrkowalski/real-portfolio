import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { animate, stagger } from 'motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  // grab all skills icons
  const data = useStaticQuery(graphql`{
      allFile(
        filter: {relativeDirectory: {eq: "icons/skills"}, extension: {eq: "svg"}}
      ) {
        edges {
          node {
            name,
            publicURL
          }
        }
      }
  }`)

  const iconsList = data.allFile.edges.map((file, index) => {
    const upperCaseSkills = ['css3', 'html5', 'php']
    const skillsTextClass = upperCaseSkills.includes(file.node.name) ? 'skills-icon-text skills-icon-text--uppercase' : 'skills-icon-text';
    return (
      <li key={index}>
        <img className="skills-icon" src={file.node.publicURL} alt={`${file.node.name} icon`} />
        <p className={`${skillsTextClass} fc-white`}>{file.node.name}</p>
      </li>
    )
  })

  if (inView) {
    animate('.skills-list li', { y: 0, opacity: 1 }, { delay: stagger(0.1) })
  } else {
    animate('.skills-list li', { y: -100, opacity: 0 })
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="pre-heading fc-white text-center">MY SKILLS</p>
        <h2 className="text-center">What I Know</h2>
        <p className="fc-white text-center">Forgive the tech jargon - these are just some of the technologies and tools I'm familiar with.</p>
        <ul className="list-reset flex flex-wrap justify-between skills-list" ref={ref}>
          {iconsList}
        </ul>
      </div>
    </section>
  )
}

export default Skills