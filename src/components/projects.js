import React from "react"
import styled from "styled-components"
import Heading from "./heading"

const Projects = ({ projects }) => {
  const renderProjects = () =>
    projects.map(({ icon, link }) => (
      <a key={link} href={link} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    ))

  return (
    <>
      <Heading>Projects</Heading>
      <ProjectsWrapper>{renderProjects()}</ProjectsWrapper>
    </>
  )
}

export default Projects

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 50px;

  svg {
    padding: 0 20px;
    width: 120px;
    fill: ${props => props.theme.body};
  }

  @media only screen and (min-width: 768px) {
    svg {
      width: 150px;
    }
  }
`
