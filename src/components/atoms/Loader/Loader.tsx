import React from "react"
import { StyledLoader } from "./StyledLoader"

interface LoaderInterface {
  fillContainer: boolean
}
const Loader = ({ fillContainer }: LoaderInterface) => (
  <StyledLoader fillContainer={fillContainer}>
    <svg viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      />
    </svg>
  </StyledLoader>
)

export default Loader
