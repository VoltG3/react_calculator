import styled from "styled-components"
import { useSelector } from "react-redux"

const StyledDisplay = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
    width: var(--StyledDisplay--width);
    height: var(--StyledDisplay--height);
      padding: 0 var(--display--padding) 0 var(--display--padding);
      margin-bottom: var(--display--marginBottom);
    font-size: var(--display--fontSize);
  border-radius: var(--border--radius);
  box-shadow: inset 6px 6px 0 0 var(--background--variant-3--shadow);
  background-color: var(--background--variant-3);
  color: var(--paragraph--light);
`

export default function Display() {
    const variable = useSelector(state => state.variable)
    const array = useSelector(state => state.array)

    let str = ""
        window.arrayBefore === 0 ? str = window.variableBefore : str = window.arrayBefore.join(" ") + " " + window.variableBefore

    return (
        <StyledDisplay>
            <p>{str}</p>
        </StyledDisplay>
    )
}
