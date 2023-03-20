// function curry() {
//     let tot = 0;
//     return function (num) {
//         tot += num
//         console.log(tot)
//     }
// }

// let sum = curry()
// sum(5)
// sum(4)
// sum(10)
// sum(0)

// Currying
// function curry2(a) {
//     return function (b) {
//         if (b) return (curry2(a + b))
//         return a
//     }
// }

// let total = curry2(10)(20)(30)(40)()
// console.log(total)

// Partial Application

// function partialCurry(a) {
//     return function (b, c) {
//         console.log(a + b + c)
//     }
// }

// let sum = partialCurry(5)(6, 7)



// function updateDOMTitle(cls) {
//     return function (text) {
//         document.querySelector(`.${cls}`).textContent = text
//     }
// }

// updateDOMTitle('greet')('Hello')

function reduceFn(args) {
    return args.reduce((a, b) => a + b, 0)
}

function multiCurry(...a) {
    if (!a.length) return 0
    return function (...b) {
        let p1 = reduceFn(a);
        let p2 = reduceFn(b)
        if (b.length) return multiCurry(p1 + p2)
        return p1
    }
}


const res = multiCurry(1, 2, 3, 4);
const res2 = multiCurry(1)(2)(3)(4);
const res3 = multiCurry(1, 2)(3, 4);
const res4 = multiCurry(1, 2, 3)(4);
const res5 = multiCurry(1)(2, 3, 4);
const res6 = multiCurry();

console.log(res(), res2(), res3(), res4(), res5(), res6);