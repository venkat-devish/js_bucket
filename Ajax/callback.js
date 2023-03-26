const sub = new Promise((resolve, reject) => {
    const res = false;
    setTimeout(() => {
        if (res) {
            resolve("Yes it's working")
        } else {
            reject('No')
        }
    }, 1000)
})

sub.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})