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
            reject(`P2 - ${text}`)
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

// console.log(Promise.all([primaryFunction('Hey'),
// secondaryFunction('Did you'),
// tertiaryFunction('Work')]).then(res => console.log(res)))

// Promise.race([primaryFunction('Hey'),
// secondaryFunction('Did you'),
// tertiaryFunction('Work')]).then(res => console.log(res))

Promise.allSettled([primaryFunction('Hey'),
secondaryFunction('Did you'),
tertiaryFunction('Work')]).then(res => console.log(res))
