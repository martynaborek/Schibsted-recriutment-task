import React from "react"
import styled from "styled-components"

const ArticleItemStyled = styled.div`
  width: 100%;
  padding: 1rem 0.5rem;
  border-radius: 5px;
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  > .photo {
    width: 40%;
    height: auto;
    border-radius: 3px;
    flex-shrink: 1;
  }
  > .articleData {
    margin-left: 1rem;
    height: 100%;
    flex-shrink: 1;
    > .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      > .title {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 1rem;
      }
    }
    > .description {
      color: #000;
      font-weight: 300;
      font-size: 0.625rem;
      display: none;
    }
  }
`

export { ArticleItemStyled }
