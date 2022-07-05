import styled from "styled-components"

const StyledButton = styled.div`
  background-color: ${({labelValue}) => {
    if (labelValue === 'D' || labelValue === "R") return 'var(--color--btn--variant-2);';
    else if (labelValue === '=') return 'var(--color--btn--variant-3);';
    else return 'var(--color--btn--variant-1);';
  }};

  box-shadow: 0 5px 0 0 ${({labelValue}) => {
    if (labelValue === 'D' || labelValue === "R") return 'var(--color--btn--variant-2--shadow);';
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
    if (labelValue === 'D' || labelValue === "R" || labelValue === '=') return 'var(--paragraph--light);';
    else return 'var(--paragraph--dark);';
  }};

  font-size: ${({labelValue}) => {
    if (!isNaN(labelValue)) return 'var(--keyboard--fontSize--big);';
    else return 'var(--keyboard--fontSize--small);';
  }};
    
    font-weight: 700;
`

function getButtonLabelValue(buttonLabel) {
    let valueToReturn
    for (let [key, value] of Object.entries({ buttonLabel })) {
        // console.log("Object buttonLabel to String - ", `${key}: ${value}`)
        // console.log("Object buttonLabel value     - ", `${value}`)
        valueToReturn =  `${value}`
    }

    return valueToReturn
}

const Button = ({ buttonLabel }) => {
    return (
        <StyledButton
            labelValue={ getButtonLabelValue(buttonLabel) }
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
