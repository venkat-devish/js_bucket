function toggle(...args) {
    let searchIndex = -1;
    return function () {
        searchIndex += 1;
        let index = searchIndex % args.length;
        console.log(args[index]);
    };
}

const onOff = toggle(1, 2, 3);
onOff();
onOff();
onOff();
onOff();
onOff();
onOff();
onOff();

console.log('------------------------------------------------')

const greet = toggle('hello')
greet();
greet();
greet();
greet();

