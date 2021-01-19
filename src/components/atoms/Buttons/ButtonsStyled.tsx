import React from "react"
import styled from "styled-components"

const ButtonPrimaryStyled = styled.button`
  background-color: #172630;
  border-radius: 30px;
  border: 2px solid #172630;
  color: #fefefe;
  height: 2.5rem;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 900;
  transition: all 0.1s ease-in;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  > .content {
    display: flex;
    justify-items: center;
    align-items: center;
  }
`

const ButtonStyled = styled.button`
  background-color: #006cfa;
  border-radius: 30px;
  border: 2px solid #006cfa;
  color: #fefefe;
  height: 2.5rem;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 900;
  transition: all 0.1s ease-in;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  > .content {
    display: flex;
    justify-items: center;
    align-items: center;
  }
`

export { ButtonPrimaryStyled, ButtonStyled }
