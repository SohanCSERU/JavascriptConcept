function bar(params) {
    console.log(params);
}

function foo(name) {
    setTimeout(function () {
        bar(name);
    }, 2000);
}

foo("sakib");
console.trace();

