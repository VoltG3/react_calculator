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
`

const StyledHeaderRightTile = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default function Header() {
    return (
        <StyledHeader>
            <StyledHeaderLeftTile>
                <p>Calc</p>
            </StyledHeaderLeftTile>

            <StyledHeaderRightTile>
                <p>theme</p>
            </StyledHeaderRightTile>
        </StyledHeader>
    )
}
