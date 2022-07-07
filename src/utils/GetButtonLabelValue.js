
export function getButtonLabelValue(buttonLabel) {
    let valueToReturn
    for (let [key, value] of Object.entries({ buttonLabel })) {
         // console.log("Object buttonLabel to String - ", `${key}: ${value}`)
         // console.log("Object buttonLabel value     - ", `${value}`)
        valueToReturn =  `${value}`
    }

    return valueToReturn
}
