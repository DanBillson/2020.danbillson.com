import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper"
import TextWithHeading from "../components/textWithHeading"
import MediaList from "../components/mediaList"

import { media } from "../config"

const Media = () => {
  return (
    <Layout>
      <SEO title="Media" />
      <Wrapper>
        <TextWithHeading title={media.title} body={media.body} />
        <MediaList list={media.list} />
      </Wrapper>
    </Layout>
  )
}

export default Media
