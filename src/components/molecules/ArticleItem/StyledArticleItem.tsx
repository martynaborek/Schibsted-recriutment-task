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
  align-items: stretch;
  justify-content: flex-start;
  overflow: hidden;
  @media (min-width: 768px) {
    padding: 1.5rem 0 1.5rem 1rem;
  }

  > .photo {
    width: 40%;
    height: auto;
    border-radius: 3px;
    flex-shrink: 0;
    max-height: 15rem;
    @media (min-width: 768px) {
      width: 30%;
    }
  }

  > .articleData {
    width: 55%;
    margin-left: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (min-width: 768px) {
        flex-direction: row;
        margin-bottom: 1rem;
      }

      > .title {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.3;
        margin-bottom: 1rem;
        @media (min-width: 500px) {
          font-size: 1.5rem;
          margin-bottom: .5rem;
        }
        @media (min-width: 768px) {
          font-size: 2rem;
          line-height: 1.2;
          width: 75%;
        }
      }
      > .date {
        font-size: 1rem;
        color: #808080;
        font-weight: 700;
        line-height: 1;
        @media (min-width: 500px) {
          font-size: 1.2rem;
        }
        @media (min-width: 768px) {
          font-size: 1.3rem;
        }
      }
    }

    > .description {
      display: none;
      @media (min-width: 768px) {
        display: flex;
        color: #000;
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 1.4;
      }
    }
  }
`

export { ArticleItemStyled }
