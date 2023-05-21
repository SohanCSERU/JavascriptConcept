const usernames: string[] = ["jordanrjdev", "anonymous123", "channelyy"];

const simulateFetchData = (username: string) : Promise<string> => {
 return new Promise((resolve) => {
    setTimeout(() => {
        resolve(`${username} is a valid username`);
    },1000);
 });
}


// const dataUsers = usernames.map( async (username) => {
//     return await simulateFetchData(username);
// });

// console.log(dataUsers);

const getWithPromiseAll = async() => {
    console.time("promise all");
    let data = await Promise.all(usernames.map(async (username) => {
      return await simulateFetchData(username);
    }))
    console.timeEnd("promise all");
 }
 getWithPromiseAll();