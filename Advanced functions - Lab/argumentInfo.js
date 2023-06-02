function solve(...arg) {
    let count = 0;
    let obj = {};

    for (let i = 0; i < arg.length; i++) {
        count = 0;
        let type = typeof arg[i];
        if (!obj[type]) {
            obj[type] = [];
        }
        obj[type].push(type);
        console.log(typeof arg[i] + `: ${arg[i]}`);

    }

    for (let entry of Object.entries(obj).sort((a, b) => b[1].length - a[1].length)) {
        console.log(`${entry[0]} = ${entry[1].length}`);
    }

}
console.log(solve('cat', 42, function () {
    console.log('Hello world!');
}))

//output

// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string = 1
// number = 1
// function = 1