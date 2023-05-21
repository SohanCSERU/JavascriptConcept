const scores = [22, 54, 76, 92, 43, 33];

// for(i in scores) {
//     console.log(scores[i]);
// }

// for(score of scores) {
//   console.log(score);
// }

// scores.forEach(  (score) => {
//   console.log(score);
// });

const map1 = scores.map( score => score*2);
console.log(map1);