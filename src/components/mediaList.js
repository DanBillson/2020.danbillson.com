import React from "react"
import styled from "styled-components"

const MediaGroup = ({ title, children }) => {
  return (
    <MediaSection>
      <MediaHeading>{title}</MediaHeading>
      <MediaBody>
        <ul>{children}</ul>
      </MediaBody>
    </MediaSection>
  )
}

const Media = ({ list }) => {
  return (
    <>
      {Object.entries(list).map(([month, media]) => {
        return (
          <MediaWrapper>
            <h4>{month}</h4>
            <MediaGrid>
              {Object.entries(media).map(([category, films]) => (
                <MediaGroup title={category}>
                  {films.map(({ title, info, emoji }) => (
                    <EmojiLi key={title} emoji={emoji}>
                      {title} <Info>{info}</Info>
                    </EmojiLi>
                  ))}
                </MediaGroup>
              ))}
            </MediaGrid>
          </MediaWrapper>
        )
      })}
    </>
  )
}

export default Media

const MediaWrapper = styled.div`
  padding: 2rem 0;
  width: 100%;

  h4 {
    margin: 0;
    padding: 0.5rem 1rem;
  }
`

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const MediaHeading = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.secondary};
  color: #fff;
`

const MediaSection = styled.div`
  &:nth-child(2) {
    ${MediaHeading} {
      background-color: ${({ theme }) => theme.tertiary};
    }
  }
`

const MediaBody = styled.div`
  padding: 0.5rem;
`

const EmojiLi = styled.li`
  list-style-type: "${({ emoji }) => emoji}";
`

const Info = styled.span`
  color: #a0a29d;
  font-size: 0.8rem;
`
