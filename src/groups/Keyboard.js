import styled from "styled-components"
import Button from "../components/Button.js";

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
        
        & div:nth-child(21) { grid-column: span 3; }
        & div:nth-child(22) { grid-column: span 2; }
        
  padding: var(--keyboard--padding);
  border-radius: var(--border--radius);
  background-color: var(--background--variant-3);
`

export default function Keyboard() {
    return (
        <StyledKeyboard>
            <Button buttonLabel={ "7" } />
            <Button buttonLabel={ "8" } />
            <Button buttonLabel={ "9" } />
            <Button buttonLabel={ "+" } />
            <Button buttonLabel={ "DEL" } />
            <Button buttonLabel={ "4" } />
            <Button buttonLabel={ "5" } />
            <Button buttonLabel={ "6" } />
            <Button buttonLabel={ "-" } />
            <Button buttonLabel={ "P" } />
            <Button buttonLabel={ "1" } />
            <Button buttonLabel={ "2" } />
            <Button buttonLabel={ "3" } />
            <Button buttonLabel={ "x" } />
            <Button buttonLabel={ "(" } />
            <Button buttonLabel={ "0" } />
            <Button buttonLabel={ "." } />
            <Button buttonLabel={ "%" } />
            <Button buttonLabel={ "/" } />
            <Button buttonLabel={ ")" } />
            <Button buttonLabel={ "RESET" } />
            <Button buttonLabel={ "=" } />
        </StyledKeyboard>
    )
}
