import styled from "styled-components";

const StyledFooter = styled.div`
  text-align: center;
    margin-top: 12px;
  font-size: var(--footer--fontSize);

  color: var(--footer--paragraph);
  
    a { color: var(--footer--anchor); }
    * { margin-left: 6px; }
`

export default function Footer() {
    return (
        <StyledFooter>
            <strong>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a></strong>
            <strong>Coded by <a href="https://www.danoss.no" target="_blank">© 2022 VoltG3</a></strong>
        </StyledFooter>
    )
}
