import styled from "styled-components";

const StyledFooter = styled.div`
  text-align: center;
`

export default function Footer() {
    return (
        <StyledFooter>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://www.danoss.no" target="_blank">VoltG3</a>.
        </StyledFooter>
    )
}