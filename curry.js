function curry() {
    let tot = 0;
    return function (num) {
        tot += num
        console.log(tot)
    }
}

let sum = curry()
sum(5)
sum(4)
sum(10)
sum(0)

Currying
function curry2(a) {
    return function (b) {
        if (b) return (curry2(a + b))
        return a
    }
}

let total = curry2(10)(20)(30)(40)()
console.log(total)

// Partial Application

function partialCurry(a) {
    return function (b, c) {
        console.log(a + b + c)
    }
}

let sum = partialCurry(5)(6, 7)



function updateDOMTitle(cls) {
    return function (text) {
        document.querySelector(`.${cls}`).textContent = text
    }
}

updateDOMTitle('greet')('Hello')

