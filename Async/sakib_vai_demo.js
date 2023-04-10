function loginUser(email, callback) {
    callback(email);
}

loginUser('a@gmail.com', (user) => {
    console.log(user)
});