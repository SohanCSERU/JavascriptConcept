
function loginUser(email,password,callback){
    setTimeout( () => {
        console.log("Success");
        callback( {userEmail: email,userPass:password} );
    }, 1500);
}

function getUserNames(email,callback){
    setTimeout( () => {
        console.log("users names are: "+ email);
        callback(['sohan','shaib','sotej']);
    },2000);
}

const user = loginUser('a@gmail.com',1234567, (user) => {
    console.log(user);
    getUserNames(user.userEmail, (names) => {
        console.log(names);
    });

    // getUserNames(user.userEmail);
});
console.log(user);