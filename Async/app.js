console.log("Starting");

/*
// This part is for without use the callback keyword
function loginUser(email,password,my_function){
    my_function(email,password);
}

function printUserInfo(email,password){
    console.log(email,password);
}

console.log(loginUser('a@gmail.com',1234567,printUserInfo)); 
*/

/* / ------------------------------------------------

    Below code is user to demonstrate the "Callback" function in javascript

*/

function loginUser(email,password,callback){
    setTimeout( () => {
        console.log("Success");
        callback( {userEmail: email,userPass:password} );
    }, 1500);
}

// function getUserNames(email){
//     setTimeout( () => {
//         callback('Names are');
//     },2000);
// }
const user = loginUser('a@gmail.com',1234567, (name) => {
    console.log(typeof name);
    console.log(name);
    // getUserNames(user.userEmail);
});
console.log(user);


//Here  printUserInfo is used instead of arrow function;
// console.log(loginUser('a@gmail.com',1234567,printUserInfo));


console.log("Finished"); 