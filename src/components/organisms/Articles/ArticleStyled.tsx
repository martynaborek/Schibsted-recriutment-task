import React from "react"
import styled from "styled-components"

const ArticlesStyled = styled.div`
  margin: 5rem auto;
  padding: 1rem 1rem;
  max-width: 1024px;
  @media (min-width: 768px) {
    margin: 7rem auto;
  }
`
const ArticleHeaderStyled = styled.header`
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.05);
  padding: 1rem 0.5rem;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const CheckboxStyled = styled.label`
  margin: 0.5rem 1rem 0 0;
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: space-between;
  width: 4.5rem;
  @media (min-width: 768px) {
    width: 4.8rem;
  }

  > .label {
    font-size: 1rem;
    font-weight: 300;
    color: #000;
    position: absolute;
    z-index: 10;
    cursor: pointer;
    margin-left: 1.5rem;
    @media (min-width: 768px) {
      font-size: 1.1rem;
      margin-left: 1.6rem;
    }
  }

  input {
    opacity: 0;
    visibility: hidden;
    position: absolute;

    &:checked {
      ~ .check {
        border-color: #006cfa;
        box-shadow: 0px 0px 0px 15px #006cfa inset;

        &::after {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }

  .check {
    width: 12px;
    height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 100px;
    background-color: #fff;
    border: 2px solid #006cfa;
    box-shadow: 0px 0px 0px 0px #006cfa inset;
    transition: all 0.15s cubic-bezier(0, 1.05, 0.72, 1.07);

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 4;
      position: absolute;
      transform: scale(0);
      background-size: 50%;
      background-image: url("http://s6.picofile.com/d/8392306668/c38c12a0-6db3-47d4-a80c-7dad8fab5186/checkmark.svg");
      background-repeat: no-repeat;
      background-position: center;
      transition-delay: 0.2s !important;
      transition: all 0.25s cubic-bezier(0, 1.05, 0.72, 1.07);
    }
  }
`

const DataSourcesStyled = styled.div`
  @media (min-width: 768px) {
    padding: .5rem 1rem;
  }
  > .title {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1;
    @media (min-width: 500px) {
      font-size: 1.3rem;
    }
    @media (min-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: .5rem;
    }
  }
  > .data {
    display: flex;
    align-items: center;
    justify-items: center;
  }
  
`

const WrapperStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`

export {
  ArticlesStyled,
  ArticleHeaderStyled,
  CheckboxStyled,
  DataSourcesStyled,
  WrapperStyled,
}
