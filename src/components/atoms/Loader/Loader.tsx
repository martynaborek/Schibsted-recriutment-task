import React from "react"
import { StyledLoader, StyledLoaderWrapper } from "./StyledLoader"

interface LoaderInterface {
  fillContainer?: boolean
}
const Loader = ({ fillContainer }: LoaderInterface) => (
  <StyledLoaderWrapper fillContainer={fillContainer}>
    <StyledLoader viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      />
    </StyledLoader>
  </StyledLoaderWrapper>
)

export default Loader
