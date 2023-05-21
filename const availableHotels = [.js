const availableHotels = [
  {
    id: '1',
    rate: 5000,
    currency: 'BDT'
  },
  {
    id: '2',
    rate: 6000,
    currency: 'BDT'
  }
];

const hotelsInfo = [
  {
    id: '1',
    name: 'seagull'
  },
  {
    id: '2',
    name: 'sayman'
  }
];

function dbquery(id) {
  const info = hotelsInfo.find(hotel => id === hotel.id);

  return new Promise((resolve) => {
    setTimeout(() => resolve(info), 5000);
  });
}

const transformer = async (hotel) => {
  const hotelInfo = await dbquery(hotel.id);
  return {
    ...hotelInfo,
    ...hotel,
  };
}

const availableHotelsWithInfo = availableHotels.map(transformer);


Promise.all(availableHotelsWithInfo)
  .then((hotels) => {
    console.log(hotels);
  });

console.log("after");

// console.log(availableHotelsWithInfo);

// const availableHotelsWithInfo = availableHotels.map((hotel) => {
//   const hotelInfo = dbquery(hotel.id);
//   return {
//     ...hotelInfo,
//     ...hotel,
//   }
// });


// console.log(
//   availableHotelsWithInfo
// );

// const promise1 = new Promise((resolve) => {
//   setTimeout(() => resolve("pmomise 1 resolved"), 5000);
// });


// const promise2 = new Promise((resolve) => {
//   setTimeout(() => resolve("pmomise 2 resolved"), 8000);
// });

// promise1.then((x) => {
//   console.log(x);
// })

// promise2.then((x) => {
//   console.log(x);
// })

// Promise
//   .all([promise1, promise2])
//   .then((resolveValues) => {
//     console.log(resolveValues);
//   });

