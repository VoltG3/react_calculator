import styled from "styled-components"
import React, {useState} from "react"

window.switchMovesToRight = true

const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
`

const CheckBoxWrapper = styled.div`
  position: relative;
`

const CheckBoxLabel = styled.label`
  position: absolute;
      top: 0;
      left: 0;
      width: 84px;
      height: 14px;
  padding-bottom: 10px;
  border-radius: 15px;
  box-shadow: inset 3px 3px 0 0 var(--background--variant-2--shadow);
  background-color: var(--background--variant-2);
  cursor: pointer;
  
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: 3px;
    background-color: var(--color--btn--variant-3);
    transition: 0.2s;
  }
`

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
      width: 84px;
      height: 14px;
  &:checked + ${CheckBoxLabel} {
    background-color: var(--background--variant-2);
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
          width: 18px;
          height: 18px;
      margin-left: ${({switchPosition}) => {
          return switchPosition; 
      }};
      transition: 0.2s;
    }
  }
`

// window.moveSwitchRight = true
// function switchPositionController(position) {
//     if(window.moveSwitchRight === true && position === 1) { return 2 }
//     if(window.moveSwitchRight === true && position === 2) { return 3 }
//     if(window.moveSwitchRight === true && position === 3) { return 1 }
// }

const STATUS_PX = [ "20px;", "36px;", "60px;"]
const ColorThemaSwitch = () => {
    const [status, setStatus] = useState(1)
    console.log("STATUS", status)
    console.log("switchPosition BEFORE", STATUS_PX[status])

    const handleChange = () => {

        const newStatus = (status + 1) % STATUS_PX.length
        console.log("STATUS_PX -- length", STATUS_PX.length)
        setStatus(newStatus)

        console.log("switchPosition AFTER", newStatus, STATUS_PX[status])
    }

    return (
        <CheckBoxContainer>
            <CheckBoxWrapper>
                <CheckBox
                    id="checkbox"
                    type="checkbox"
                    onChange={ handleChange }
                    switchPosition={ STATUS_PX[status] }
                />

                <CheckBoxLabel
                    htmlFor="checkbox"
                />

            </CheckBoxWrapper>
        </CheckBoxContainer>
    )
}

export default ColorThemaSwitch
