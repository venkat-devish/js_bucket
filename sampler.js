function message(msg) {
    console.log(msg)
}

function sampler(message, idx) {
    let sampleIndex = 0;
    return function (text) {
        sampleIndex += 1
        if (sampleIndex === idx) {
            sampleIndex = 0
            return message(text);
        }
    }
}

const sample = sampler(message, 4)
sample('Hiii')
sample('Hiii')
sample('Hiii')
sample('Hiii')

