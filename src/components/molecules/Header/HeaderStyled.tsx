import React from "react"
import styled from "styled-components"

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 100%;
  border-radius: 5px;
  padding: 1.5rem 1rem;
  z-index: 50;
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.05);
`
const LogoStyled = styled.img`
  width: 8rem;
  height: 1.5rem;
`

export { HeaderStyled, LogoStyled }
