import React from "react"
// components
import ButtonPrimary from "../../atoms/Buttons/ButtonPrimary"
// styles
import { ErrorStyled } from "./ErrorStyled"

interface ErrorProps {
  fillContainer: boolean
}

const Error = ({ fillContainer }: ErrorProps) => {
  return (
    <ErrorStyled fillContainer={fillContainer}>
      <div className="error">
        <p className="info">Sorry, something went wrong :(</p>
        <ButtonPrimary
          click={() => window.location.reload()}
          content="Refresh the page"
        />
      </div>
    </ErrorStyled>
  )
}

export default Error
