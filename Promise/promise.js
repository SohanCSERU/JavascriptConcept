const promise = new Promise(function(resolve, reject) {
    setTimeout( () => {
        // resolve({user : "sohan"});
        reject(new Error('Could not resolve'));
    },1000);
});


promise
    .then( user => {
        console.log(user); 
    }).catch( err => console.log(err.message));