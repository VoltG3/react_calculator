import styled from "styled-components"

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
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`

const ColorThemaSwitch = () => {

    return (
        <CheckBoxContainer>
            <CheckBoxWrapper>
                <CheckBox
                    id="checkbox"
                    type="checkbox"
                />

                <CheckBoxLabel
                    htmlFor="checkbox"
                />

            </CheckBoxWrapper>
        </CheckBoxContainer>
    )
}

export default ColorThemaSwitch