
// function Person(name){
//     this.name = name;

//     this.greet = function(){
//         return ('Hello' +' '+this.name);
//     }
// }


class Person{
  constructor(name){
    this.name = name;
  }
  greet(age){
    console.log(`Hello ${this.name} and age is ${age}`);
  }
}

const person1 = new Person('Sohan');
console.log(person1.name);
person1.greet(25);

