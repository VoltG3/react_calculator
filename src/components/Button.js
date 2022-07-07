import styled from "styled-components"
import { getButtonLabelValue } from "../utils/GetButtonLabelValue.js"
import { useDispatch } from "react-redux"

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

const Button = ({ buttonLabel }) => {
    const dispatch = useDispatch()
    const getUserInput = (value) => {

        if(value === 'RESET') {
            dispatch({type:"RESET"})
        } else {
            dispatch({type:"ADD_VARIABLE", payload: value})
        }

        console.log(value)
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
