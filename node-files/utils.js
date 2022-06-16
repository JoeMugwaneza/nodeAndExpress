const names = require('./name');

const sayHi = (name) =>{
    console.log(`Welcome Ms./Mr. ${name}, ${names.john}, and ${names.peter}`);
}

module.exports = sayHi;