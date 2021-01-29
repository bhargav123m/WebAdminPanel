
export const URLValidation = (value, boolVal) => {
    let urlBoolean = false
    const re=/\b(https?|ftp|file):\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_|]/;
    if((value.length === 0 && boolVal === false) || re.test(value)){
        urlBoolean = true
    }
    return urlBoolean
}

export const numValidation = (value, boolVal) => {
    let isNumVal = false
    const re = /^-?[0-9]\d*(\.\d+)?$/
    if((value.length === 0 && boolVal === false) || re.test(value)){
        isNumVal = true
    }
    return isNumVal
}


