import { createGlobalStyle } from "styled-components"

export const GlobalColorThemes = createGlobalStyle`

  :root {
    --background--variant-0: hsl(222, 40%, 18%);
    --background--variant-1: hsl(222, 26%, 31%);
    --background--variant-1--shadow: hsl(221, 38%, 15%);
    --background--variant-2: hsl(223, 31%, 20%);
    --background--variant-2--shadow: hsl(224, 31%, 25%);
    --background--variant-3: hsl(224, 36%, 15%);
    --background--variant-3--shadow: hsl(221, 45%, 22%);
    --color--btn--slider: hsl(6, 70%, 34%);
    --color--btn--variant-1: hsl(30, 25%, 89%);
    --color--btn--variant-1--shadow: hsl(28, 16%, 65%);
    --color--btn--variant-2: hsl(225, 21%, 49%);
    --color--btn--variant-2--shadow: hsl(224, 28%, 35%);
    --color--btn--variant-3: hsl(6, 63%, 50%);
    --color--btn--variant-3--shadow: hsl(6, 70%, 34%);
    --paragraph--dark: hsl(221, 14%, 31%);
    --paragraph--light: rgb(255, 255, 255);
    --footer--paragraph: hsl(30, 25%, 89%);
    --footer--anchor: hsl(28, 16%, 65%);
  }
`
