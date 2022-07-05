import styled from "styled-components"

const StyledButton = styled.button`
  background-color: ${({statusColor}) => {
    if (statusColor === '1') return 'red';
    else if (statusColor === '2') return 'pink';
    else return 'cyan';
}};
  
      border-radius: var(--border--radius);
      
      &:hover {
        background-color: azure;
      }
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
        <StyledButton statusColor={ getButtonLabelValue(buttonLabel) }>
            { buttonLabel }
        </StyledButton>
    )
}

export default Button
