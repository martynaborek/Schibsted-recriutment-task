import React from "react";
import styled from 'styled-components'

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
  padding: 4rem 2.5rem;
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.05)
`
const LogoStyled = styled.img`
  width: 25rem;
  height: 4.5rem;
`

export { HeaderStyled, LogoStyled }