import styled from "styled-components"
import { GlobalStyles } from './GlobalStyles.styles.js'
import { GlobalColorThemes } from "./GlobalColorThemes.styles.js";
import Header from "./groups/Header";
import Display from "./groups/Display";
import Keyboard from "./groups/Keyboard";
import Footer from "./groups/Footer";

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
    width: var(--StyledSection--width);
    height: var(--StyledSection--height);
  border: solid 2px var(--background--variant-3);
  border-radius: var(--border--radius);
  box-shadow: 10px 10px 10px 5px var(--background--variant-1--shadow);
  background-color: var(--background--variant-1);
  padding: 20px;
`

export default function App() {
  return (
     <StyledSection>
         <GlobalStyles />
         <GlobalColorThemes />
            <Header />
            <Display />
            <Keyboard />
            <Footer />
     </StyledSection>
  )
}
