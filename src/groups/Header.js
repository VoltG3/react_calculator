import styled from "styled-components";
import BlinkingLight from "../components/BlinkingLight.js"

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

const StyledSwitchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:    1fr;
  gap: 0 8px;
  grid-auto-flow: row;
  grid-template-areas:
    ". ."
    ". .";
`
const StyledSwitchContainerTile01 = styled.div`
  display: flex;
  justify-content: center;
`

const StyledSwitchContainerTile02 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`

const StyledSwitchContainerTile03 = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledSwitchContainerTile04 = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledParagraph = styled.p`
  color: var(--paragraph--light);
`

const StyledParagraphSwitchStatus = styled.p`
  margin: 0;
  color: var(--paragraph--light);
`

export default function Header() {
    return (
        <StyledHeader>
            <StyledHeaderLeftTile>
                <StyledParagraph>calc</StyledParagraph>
            </StyledHeaderLeftTile>

            <StyledHeaderRightTile>
                <StyledSwitchContainer>
                    <StyledSwitchContainerTile01>
                        <BlinkingLight />
                    </StyledSwitchContainerTile01>

                    <StyledSwitchContainerTile02>
                        <StyledParagraphSwitchStatus>1</StyledParagraphSwitchStatus>
                        <StyledParagraphSwitchStatus>2</StyledParagraphSwitchStatus>
                        <StyledParagraphSwitchStatus>3</StyledParagraphSwitchStatus>
                    </StyledSwitchContainerTile02>

                    <StyledSwitchContainerTile03>
                        <StyledParagraph>theme</StyledParagraph>
                    </StyledSwitchContainerTile03>

                    <StyledSwitchContainerTile04>
                        <StyledParagraph>switch</StyledParagraph>
                    </StyledSwitchContainerTile04>
                </StyledSwitchContainer>
            </StyledHeaderRightTile>
        </StyledHeader>
    )
}

