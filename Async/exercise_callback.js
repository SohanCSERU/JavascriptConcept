function greet(name,callback){
    console.log('Hi i am ' +name);
    callback(name);
}

function callme(name){
    console.log('My name is '+name);
}

function a (name) {
    console.log("name in \'a\' function", name);
    
    setTimeout(()=>{
        callme('sohan');
    },2000);
}

greet('peter',a);
