import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

  :root {
    // Global
    --border--radius: 12px;

    // Container
    --StyledSection--width: auto;
    --StyledSection--height: 100%;

    // Header
    --StyledDisplay--width: auto;
    --StyledDisplay--height: 140px;

    // Display
    --display--padding: 20px;
    --display--marginBottom: 25px;
    --display--fontSize: 62px;

    // Keyboard
    --keyboard--padding: 20px;
    --keyboard--fontSize--small: 18px;
    --keyboard--fontSize--big: 26px;

    // Footer
    --footer--fontSize: 11px;
  }

  * { border: dotted 1px lightgray; } 
  
  body {
    background: var(--background--variant-0);
  }
`
