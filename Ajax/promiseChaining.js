function primaryFunction(text) {
    return new Promise((resolve, reject) => [
        setTimeout(() => {
            resolve(`P1 - ${text}`)
        }, 1000)
    ])
}

function secondaryFunction(text) {
    return new Promise((resolve, reject) => [
        setTimeout(() => {
            resolve(`P2 - ${text}`)
        }, 1000)
    ])
}

function tertiaryFunction(text) {
    return new Promise((resolve, reject) => [
        setTimeout(() => {
            resolve(`P3 - ${text}`)
        }, 1000)
    ])
}

primaryFunction('Hi').then((res) => {
    console.log(res)
    return secondaryFunction('How are')
}).then((res) => {
    console.log(res)
    return tertiaryFunction('You')
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})