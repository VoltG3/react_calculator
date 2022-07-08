import styled from "styled-components"
import { useDispatch } from "react-redux"
import { getButtonLabelValue } from "../utils/GetButtonLabelValue.js"
import Message from "../utils/Messages.js"

const StyledButton = styled.div`
  background-color: ${({labelValue}) => {
    if (labelValue === 'DEL' || labelValue === "RESET") return 'var(--color--btn--variant-2);';
    else if (labelValue === '=') return 'var(--color--btn--variant-3);';
    else return 'var(--color--btn--variant-1);';
  }};

  box-shadow: 0 5px 0 0 ${({labelValue}) => {
    if (labelValue === 'DEL' || labelValue === "RESET") return 'var(--color--btn--variant-2--shadow);';
    else if (labelValue === '=') return 'var(--color--btn--variant-3--shadow);';
    else return 'var(--color--btn--variant-1--shadow);';
  }};
  
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: var(--border--radius);
 
      &:hover {
        opacity: 0.8;
        transition: ease-in 0.1s;
      }
  
      &:active {
        box-shadow: 0 0 0 0;
        transform: translateY(4px);
      }
`
const StyledButtonParagraph = styled.p`
  color: ${({labelValue}) => {
    if (labelValue === 'DEL' || labelValue === "RESET" || labelValue === '=') return 'var(--paragraph--light);';
    else return 'var(--paragraph--dark);';
  }};

  font-size: ${({labelValue}) => {
    if (!isNaN(labelValue)) return 'var(--keyboard--fontSize--big);';
    else if(labelValue === 'DEL' || labelValue === 'RESET' || labelValue === '=') return 'var(--keyboard--fontSize--big);';
    else return 'var(--keyboard--fontSize--small);';
  }};
    
    font-weight: 700;
`

window.variableBefore = "0"
window.arrayBefore = []
window.dot = false

console.log(Message(1))
console.log(Message(11))
console.log(Message(12))

const Button = ({ buttonLabel }) => {
    const dispatch = useDispatch()
    const getUserInput = (buttonValue) => {

        const RESET_VARIABLE = () => {
            dispatch({
                type:"RESET_VARIABLE"
            }); window.variableBefore = "0"
        }

        const RESET_ARRAY = () => {
            dispatch({
                type:"RESET_ARRAY"
            }); window.arrayBefore.length = 0
                window.dot = false
        }

        const VARIABLE_IS_VARIABLE = () => {
            dispatch({
                type:"VARIABLE_IS_VARIABLE",
                payload: window.variableBefore
            })
        }

        const ADD_TO_VARIABLE = () => {
            dispatch({
                type:"ADD_TO_VARIABLE",
                payload: buttonValue
            });
        }

        const ADD_TO_ARRAY = () => {
            dispatch({
                type:"ADD_TO_ARRAY",
                payload: window.arrayBefore
            })
        }

        /**
         *  Section - Functions
         */

        if(buttonValue === "RESET") {
            console.log(Message(2))

                RESET_VARIABLE()
                RESET_ARRAY()
        }

        if(buttonValue === "DEL") {
            console.log(Message(3))
            console.log(Message(31))

                let isDot = window.variableBefore.charAt(window.variableBefore.length - 1)
                    if(isDot === ".") { window.dot = false }

                let temp = window.variableBefore.slice(0, -1)
                    temp.length === 0 ? temp = 0 : temp = temp
                           window.variableBefore = temp

                    VARIABLE_IS_VARIABLE()

            console.log(Message(32))
        }

        if(buttonValue === "=") {
            console.log(Message(4))
        }

        /**
         *  Section - Dot
         */

        if(buttonValue === ".") {
            console.log(Message(5))
            console.log(Message(51))
                if(window.dot === false && buttonValue === ".") {
                   ADD_TO_VARIABLE()
                        window.variableBefore += buttonValue
                        window.dot = true

                } else {
                   console.log(Message(52))
                }

            console.log(Message(53))
        }

        /**
         *  Section - Digits
         */

        if(!isNaN(buttonValue)) {
            console.log(Message(13))
                if(window.variableBefore === "0" && buttonValue === "0") {
                    VARIABLE_IS_VARIABLE()
                }

                 else if(window.variableBefore === "0" && parseInt(buttonValue) !== 0) {
                    VARIABLE_IS_VARIABLE()
                    window.variableBefore = buttonValue
                }

                else {
                    window.variableBefore += buttonValue
                   ADD_TO_VARIABLE()
                }

            console.log(Message(14))
        }

        else {

            /**
             *  Section Operators
             */

            if(buttonValue !== "."
               && buttonValue !== "DEL"
               && buttonValue !== "RESET"
               && buttonValue !== "=") {
                   window.arrayBefore.push(window.variableBefore)
                   window.variableBefore = " "
                   window.dot = false
                   window.arrayBefore.push(buttonValue)

               ADD_TO_ARRAY()
               ADD_TO_VARIABLE()
           }
        }

        console.log(Message(15))
    }

    return (
        <StyledButton
            labelValue={ getButtonLabelValue(buttonLabel) }
            onClick={() => getUserInput(getButtonLabelValue(buttonLabel))}
        >
            <StyledButtonParagraph
                labelValue={ getButtonLabelValue(buttonLabel) }
            >
                { buttonLabel }
            </StyledButtonParagraph>
        </StyledButton>
    )
}

export default Button
