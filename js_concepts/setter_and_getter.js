class Person{
    constructor(name){
      this.name = name;
    }

    get personName(){
        return this.name;
    }

    // set personName(x){
    //     this.name = x;
    // }
  }

  
let person1 = new Person('shaib');
console.log(person1.name);


person1.personName = 'sohan';
console.log(person1.name);

//   const person1 = new Person('Sohan');
//   console.log(person1.name);
//   person1.greet(25);
  
  