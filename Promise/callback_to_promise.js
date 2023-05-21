console.log("Start");

function loginUser(email,password){
    return new Promise( (resolve,reject) =>{
        setTimeout( ()=>{
            console.log("Now we have the data");
            resolve({userEmail: email});
        },1000);
    });
}

function getUserVideos(email){
    return new Promise( (resolve,reject) =>{
        setTimeout( ()=>{
            resolve(["videos","videos2","videos3"]);
        },3000);
    });
}


function videosDetails(video){
    return new Promise( (resolve,reject) =>{
        setTimeout( ()=>{
            resolve("Title of the Video");
        },2000);
    });
}


//Asynchronously 
// loginUser("israk@abc.com","password")
//     .then( user => getUserVideos(user.email))
//     .then(videos => videosDetails(videos[0]))
//     .then(details => console.log(details));


// synchronously writting asynchronous code 
async function displayUser(){
    try{
        const loggedUser = await loginUser("israk@abc.com",122556456);
        const videos = await getUserVideos(loggedUser.userEmail);
        const details = await videosDetails(videos[0]);
        console.log(details);
    }catch(err){
        console.log(err);
    }
}

displayUser();


// const yt = new Promise((resolve) =>{
//     setTimeout(()=>{
//         console.log("Getting stuff from youtube");
//         resolve({videos : [1,2,3,4,5]});
//     },3000);
// });


// const fb = new Promise((resolve) =>{
//     setTimeout(()=>{
//         console.log("Getting stuff from facebook");
//         resolve({names: ["A", "B", "C", "D"]});
//     },200);
// });


// Promise.all([yt,fb])
//   .then( result => console.log(result) );













