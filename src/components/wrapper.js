import styled from "styled-components"

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 30px 0;
  width: 100%;
  max-width: 1600px;

  @media screen and (min-width: 400px) {
    padding: 30px 5%;
    width: 90%;
  }
`
