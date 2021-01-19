import React from "react"
import styled from "styled-components"

const FooterStyled = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: #182430;
  color: #fff;
  line-height: 1;
  font-size: 1rem;
  padding: 2rem 1rem;
  @media (min-width: 768px) {
    padding: 2rem 2rem;
  }
  .content {
    line-height: 1.3;
    > .title {
      font-weight: 300;
      font-size: 7px;
      @media (min-width: 768px) {
        font-size: 1.1rem;
      }
    }
    > .author {
      font-weight: 600;
      font-size: 10px;
      @media (min-width: 768px) {
        font-size: 1.4rem;
      }
    }
  }
`

export { FooterStyled }
