import React from "react"
import styled from "styled-components"
import Wrapper from "./wrapper"
import Heading from "./heading"

const Timeline = ({ timeline }) => {
  const renderTimeline = () =>
    timeline.map(({ title, date, body }) => (
      <Time key={title}>
        <div>
          <Title>{title}</Title>
          <Date>{date}</Date>
        </div>
        <Body>{body}</Body>
      </Time>
    ))

  return (
    <Wrapper>
      <Heading>Professional</Heading>
      {renderTimeline()}
    </Wrapper>
  )
}

export default Timeline

const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;

  @media only screen and (min-width: 1000px) {
    width: 100%;
    max-width: 850px;
    flex-direction: row;
  }
`

const Title = styled.h3`
  margin-bottom: 0;
  color: ${props => props.theme.body};
  font-size: 24px;
  font-weight: 900;
`

const Date = styled.h4`
  color: ${props => props.theme.primary};
  font-size: 20px;
  font-weight: 300;
`

const Body = styled.p`
  max-width: 600px;
  color: ${props => props.theme.body};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`
