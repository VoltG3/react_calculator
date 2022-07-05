import styled from "styled-components"
import { GlobalStyles } from './GlobalStyles.styles.js'
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
`

export default function App() {
  return (
     <StyledSection>
         <GlobalStyles />
            <Header />
            <Display />
            <Keyboard />
            <Footer />
     </StyledSection>
  )
}
