
export default function Message(target) {

    const arr = [
        1,  "[ POST 1 ] - -------------------------------------------------------- STATUS",
        11, "           - variable by default        :: [ " + window.variableBefore + " ]",
        12, "           - array by default           :: [ " + window.arrayBefore.join(" ") + " ]",
        13, "           - variable BEFORE user input :: [ " + window.variableBefore + " ]",
        14, "           - variable AFTER user input  :: [ " + window.variableBefore + " ]",
        15, "           - array AFTER user input     :: [ " + window.arrayBefore.join(" ") + " ]",
        2,  "[ POST 2 ] - --------------------------------------------------------- RESET",
        3,  "[ POST 3 ] - -------------------------------------------------------- DELETE",
        4,  "[ POST 4 ] - -------------------------------------------------------- RESULT",
        5,  "[ POST 5 ] - ------------------------------------------------------- ADD DOT",
        51, "           - dot status before          :: [ " + window.dot + " ]",
        52, "           - CERR allow one dot per variable !",
        53, "           - dot status after           :: [ " + window.dot + " ]",
        31, "           - variable BEFORE slice -1   :: [ " + window.variableBefore + " ] string lenght [ " + window.variableBefore.length + " ]",
        32, "           - variable AFTER slice -1    :: [ " + window.variableBefore + " ] string lenght [ " + window.variableBefore.length + " ]"
    ]

    let tmp
    let targetBefore = target

    for(let i = 0; i < arr.length; i++) {
        if(!isNaN(arr[i])) {
            tmp = parseInt(arr[i])
        }

        if(tmp === target) {
            target = arr[i + 1]
        }
    }

    if(targetBefore === target) {
        let temp = target
        target = "CERR - message with prefix [ "+ temp + " ] doesn't exist!"
    }

    return target
}