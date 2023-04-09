let x  = (x,y) => x*y;

let greet = () => {
    return 'Hello world!';
}
console.log(x(1,5));

let a=10;

let output = (a>0) ? greet(): x(1,5);

console.log(output);