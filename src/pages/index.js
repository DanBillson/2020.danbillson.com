import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Timeline from "../components/timeline"
import Projects from "../components/projects"
import Wrapper from "../components/wrapper"
import TextWithHeading from "../components/textWithHeading"

import { title, timeline, projects, about } from "../config"

const IndexPage = () => (
  <Layout>
    <SEO title={`Home`} />
    <Hero title={title} />
    <Wrapper>
      <Timeline timeline={timeline} />
      <Projects projects={projects} />
      <TextWithHeading title={about.title} body={about.body} />
    </Wrapper>
  </Layout>
)

export default IndexPage
