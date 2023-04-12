console.log("Hello => number 1");

setInterval(() => {
  console.log("Running before the timeout => number 3");
},2000);

setTimeout(() => {
  console.log("The timeout running last => number 4");
}, 0);

process.nextTick(() => {
  console.log("Running at next tick => number 2");
});

