import styled from "styled-components"

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
  background-color: var(--background--variant-3);
  color: var(--paragraph--light);
`

export default function Display() {
    return (
        <StyledDisplay>
            <p>0</p>
        </StyledDisplay>
    )
}