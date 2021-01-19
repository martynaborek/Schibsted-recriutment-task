import styled from "styled-components"

interface ErrorStyledProps {
  fillContainer?: boolean
}

const ErrorStyled = styled.div<ErrorStyledProps>`
  position: ${(props) => props.fillContainer && "absolute"}
  top: ${(props) => (props.fillContainer ? "0" : "")}
  left: ${(props) => props.fillContainer && "0"}
  height: ${(props) => props.fillContainer && "100vh"}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  >.error {
    >.info {
      font-size: 1rem;
      line-height: 1.2;
      margin-bottom: 1rem;
    }
  }
`

export { ErrorStyled }
