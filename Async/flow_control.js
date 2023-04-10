
function final(input,callback){
  callback(`${input} and terminated by execution callback`);
}

function middleware(someInput,callback){
  return final(`${someInput} touched by middleware`,callback);
}

function initiate() {
  const someInput = 'hello this is a function ';
  middleware(someInput,function (result){
    console.log(result);
  });
}

initiate();
