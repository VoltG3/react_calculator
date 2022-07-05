import styled from "styled-components";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:    1fr;
  gap: 0 0;
  grid-auto-flow: row;
  grid-template-areas:
    ". .";
`

const StyledHeaderLeftTile = styled.div`
  display: flex;
  font-size: 26px;
  font-weight: 900;
`

const StyledHeaderRightTile = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 900;
`

const StyledParagraph = styled.p`
  color: var(--paragraph--light);
`

export default function Header() {
    return (
        <StyledHeader>
            <StyledHeaderLeftTile>
                <StyledParagraph>calc</StyledParagraph>
            </StyledHeaderLeftTile>

            <StyledHeaderRightTile>
                <StyledParagraph>theme</StyledParagraph>
            </StyledHeaderRightTile>
        </StyledHeader>
    )
}
