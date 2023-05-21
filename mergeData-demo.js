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
  return hotelsInfo.find(hotel => id === hotel.id);
}


console.log(
  availableHotels.map((hotel => {
    const hotelInfo = dbquery(hotel.id);

    console.log(hotelInfo);
    return {
      ...hotel,
      ...hotelInfo,
    }
    
  }))
);

const a = {x: 1, y: 3};
const b = {z: 4, h: 56};

const c = {
  ...a,
  ...b
}

c