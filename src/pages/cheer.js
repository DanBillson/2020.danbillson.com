import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper"
import Heading from "../components/heading"
import Search from "../components/search"
import Video from "../components/video"
import { cheerArchive } from "../config"

const Cheer = () => {
  const [search, setSearch] = useState("")
  const renderArchive = () => {
    const videos = cheerArchive.map(({ title, video }) => (
      <VideoContainer
        key={title}
        hidden={search && !title.toLowerCase().includes(search.toLowerCase())}
      >
        <h3>{title}</h3>
        <Video video={video} />
      </VideoContainer>
    ))

    return videos.length ? (
      videos
    ) : (
      <NoResults>Sorry, no results found.</NoResults>
    )
  }

  return (
    <Layout>
      <SEO title={`Cheer`} />
      <Wrapper>
        <Heading>Cheer Archive</Heading>
        <CheerSearch
          label="filter:"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <CheerGrid>{renderArchive()}</CheerGrid>
      </Wrapper>
    </Layout>
  )
}

export default Cheer

const CheerSearch = styled(Search)`
  margin-left: auto;
`

const NoResults = styled.h4`
  margin-top: 60px;
  font-size: 36px;
`

const CheerGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  min-height: 90vh;

  & > div {
    width: 100%;
    min-width: 300px;
    iframe {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    & > div {
      width: 47.5%;
    }
  }
`

const VideoContainer = styled.div`
  display: ${props => (props.hidden ? "none" : "block")};
`
