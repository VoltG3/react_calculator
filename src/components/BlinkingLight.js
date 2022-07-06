import styled from "styled-components"

const StyledBlinkingLightContainer = styled.div`
  border-radius: 50%;
  border: solid 2px black;
`

const StyledBlinkingLight = styled.div`
  
  width: 12px;
  height: 12px;
  opacity: .25;
  
  -webkit-animation: up-right  1.5s infinite;
  -moz-animation: up-right 1.5s infinite;
  -o-animation: up-right 1.5s infinite;
  animation: up-right 1.5s infinite;

  border-radius: 50%;
  background-color: red;

  @keyframes up-right {
    0% {
      transform: scale(1);
      opacity: .25
    }
    50% {
      transform: scale (1);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: .25;
    }
  }
`

const blinkingLight = () => {
    return (
        <StyledBlinkingLightContainer>
            <StyledBlinkingLight />
        </StyledBlinkingLightContainer>
    )
}

export default blinkingLight
