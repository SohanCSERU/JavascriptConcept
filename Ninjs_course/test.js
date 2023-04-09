console.log(global);

global.setTimeout( ()=> {
    console.log('Timeout');
    clearInterval(int);
},5000);

const int = setInterval( ()=>{
    console.log('Interval');
},2500);  