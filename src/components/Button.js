import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { getButtonLabelValue } from "../utils/GetButtonLabelValue.js"

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

const Button = ({ buttonLabel }) => {
    const dispatch = useDispatch()
    const getUserInput = (buttonValue) => {

        if(buttonValue === "RESET") {
            console.log("[ POST 1 ] - RESET")
                dispatch({
                    type:"RESET"
                }); window.variableBefore = "0"
                    window.dot = false
        }

        if(buttonValue === "DEL") {
            console.log("[ POST 2 ] - DELETE")
            console.log("           - variable BEFORE delete     ::", window.variableBefore, "lenght", window.variableBefore.length)
                let isDot = window.variableBefore.charAt(window.variableBefore.length - 1)
                    if(isDot === ".") { window.dot = false }

                let temp = window.variableBefore.slice(0, -1)

                    temp.length === 0 ? temp = 0 : temp = temp
                           window.variableBefore = temp

            dispatch({type:"VARIABLE_IS_VARIABLE", payload: window.variableBefore})
            console.log("           - variable AFTER delete      ::", window.variableBefore, "lenght", window.variableBefore.length)
        }

        if(buttonValue === "=") {
            console.log("[ POST 3 ] - RESULT")

        }

        if(buttonValue === ".") {
            console.log("[ POST 4 ] - ADD DOT")
            console.log("           - dot status before          ::", window.dot)
                if(window.dot === false && buttonValue === ".") {
                    dispatch({
                        type:"ADD_TO_VARIABLE",
                        payload: buttonValue
                    }); window.dot = true
                        window.variableBefore += buttonValue

                } else {
                   console.log("           - CERR allow one dot per variable !")
                }

            console.log("           - dot status after           ::", window.dot)
        }

        if(!isNaN(buttonValue)) {
            console.log("           - variable BEFORE user click :: ", window.variableBefore)
                if(window.variableBefore === "0" && buttonValue === "0") {
                    dispatch({
                        type:"VARIABLE_IS_VARIABLE",
                        payload: buttonValue
                    })
                }

                 else if(window.variableBefore === "0" && parseInt(buttonValue) !== 0) {
                    dispatch({
                        type:"VARIABLE_IS_VARIABLE",
                        payload: buttonValue
                    }); window.variableBefore = buttonValue
                }

                else {
                    window.variableBefore += buttonValue
                    dispatch({type:"ADD_TO_VARIABLE", payload: buttonValue})
                }

            console.log("           - variable AFTER user click  ::", window.variableBefore)
        }

        else {
            // section operators

            window.arrayBefore.push(window.variableBefore)
            window.arrayBefore.push(buttonValue)

            dispatch({
                type:"ADD_TO_ARRAY",
                payload: window.arrayBefore
            })
        }

        console.log("           - user input                 ::", buttonValue)
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
