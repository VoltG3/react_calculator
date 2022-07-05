import styled from "styled-components"
import { StyledButton } from "../components/Button.style.js";

const StyledKeyboard = styled.div`
  display: grid;
  grid-template-columns: 90px 90px 90px 90px 90px;
  grid-template-rows:    60px 60px 60px 60px 60px;
  gap: 25px 25px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . .";
  border-radius: var(--border--radius);
`

export default function Keyboard() {
    return (
        <StyledKeyboard>
            <StyledButton buttonLabel={ "1" } backgroundColor={ "brown" }></StyledButton>
        </StyledKeyboard>
    )
}