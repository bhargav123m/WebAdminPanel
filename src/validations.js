
export const URLValidation = (value) => {
    let urlBoolean = false
    const re=/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
    if(re.test(value)){
        urlBoolean = true
    }
    return urlBoolean
}

export const numValidation = (value) => {
    let isNumVal = false
    const re = /^-?[1-9]\d*(\.\d+)?$/
    if(re.test(value)){
        isNumVal = true
    }
    return isNumVal
}


