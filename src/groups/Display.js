import styled from "styled-components"

const StyledDisplay = styled.div`
  display: flex;
  justify-content: end;
    width: var(--StyledDisplay--width);
    height: var(--StyledDisplay--height);
  border-radius: var(--border--radius);
`

export default function Display() {
    return (
        <StyledDisplay>

        </StyledDisplay>
    )
}