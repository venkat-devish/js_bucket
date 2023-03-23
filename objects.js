// let nums = {
//     a: 100,
//     b: 200,
//     title: 'My Nums'
// }

// for (let key in nums) {
//     if (typeof nums[key] === 'number') {
//         nums[key] = nums[key] * 2;
//     }
// }

// console.log(nums)

// const a = {}
// const b = { key: 'b' }
// const c = { key: 'c' }

// a[b] = 123;
// a[c] = 456

// console.log(a[b])

// const obj = {
//     name: 'Piyush',
//     age: 24
// }

// const stringObj = JSON.stringify(obj);
// console.log(stringObj)
// const og = JSON.parse(stringObj)
// console.log(og)

const settings = {
    username: 'Piyush',
    level: 19,
    health: 90
}

const data = JSON.stringify(settings, ['level', 'health'])
console.log(data)