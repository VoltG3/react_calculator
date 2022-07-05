import styled from "styled-components"
import Button from "./Button.js"

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.backgroundColor};
  
  border-radius: var(--border--radius);
  
  &:hover {
    background-color: azure;
  }
`
export const buttonLabel = styled.label`
  color: yellow;
`
