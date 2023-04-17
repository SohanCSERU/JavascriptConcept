let promise = new Promise(function(resolve, reject) {

    // setTimeout( ()=> {
    //     resolve("done");
    //     console.log("Hello it is done!!");
    // },1000);

    setTimeout( ()=> {
        reject(new Error("Whoops!"));
        console.log("Hello it't and error!!");
    },2000);

    console.log("waiting for the message...");
});

promise.then(
    result => {
        console.log(result);
    },
    error => {
        console.log(error);
    }
);