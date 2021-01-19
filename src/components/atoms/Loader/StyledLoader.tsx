import React from "react"
import styled from "styled-components"

interface StyledLoaderProps {
  fillContainer: boolean
}

const StyledLoader = styled.div<StyledLoaderProps>`
    position: ${(props) => props.fillContainer && "absolute"}
    top: ${(props) => (props.fillContainer ? "0" : "")}
    left: ${(props) => props.fillContainer && "0"}
    display: ${(props) => props.fillContainer && "flex"}
    justify-content: ${(props) => props.fillContainer && "center"}
    align-items: ${(props) => props.fillContainer && "center"}
    height: ${(props) => props.fillContainer && "100vh"}


  svg {
    animation: rotate 1s linear infinite;
    margin: 20px;
    width: 30px;
    height: 30px;

    & .path {
      stroke: #30588E;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes dash {
      0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
      }
      100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
      }
    }
  }
`

export { StyledLoader }
