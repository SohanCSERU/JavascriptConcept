
let url = 'http://mylogger.io/log';
const people = ['yoshi','ryu','chun-li'];


function log(message) {

    console.log(message);
}
module.exports = {
    log,people
};  // here it is exported as object

// module.exports.endPoint = url; 