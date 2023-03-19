var searchIndex = -1;
function toggle() {
    var args = arguments;
    return function () {
        searchIndex += 1;
        var index = searchIndex % args.length;
        console.log(args[index]);
    };
}

// const onOff = toggle(1, 2, 3);
// onOff();
// onOff();
// onOff();
// onOff();
// onOff();
// onOff();
// onOff();

const greet = toggle('hello')
greet();
greet();
greet();
greet();

