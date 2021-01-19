import React from "react"
// styles
import { ButtonPrimaryStyled } from "./ButtonsStyled"

interface ButtonPrimaryProps {
  content: string
  click: () => void
}

const ButtonPrimary = ({ content, click }: ButtonPrimaryProps) => (
  <ButtonPrimaryStyled onClick={click}>{content}</ButtonPrimaryStyled>
)

export default ButtonPrimary
