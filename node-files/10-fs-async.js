// FILE SYSTEM
const {readFile, writeFile} = require('fs');
readFile('./content/second.txt', 'utf-8', (err, result) =>{
    if(err) throw err;
    const second= result;
    readFile('./content/first.txt', 'utf-8', (err, result) =>{
        if(err) throw err;
        const first = result;
        writeFile('./content/result-async.txt',`here is the result: ${first}, ${second}`,(err,result) =>{
            if(err) throw err;
            console.log(result);
        })
    })
});





const sayHi = require('./utils.js');

sayHi('Susan');

const data = require('./4-alternative.js');
console.log(data);

require('./5-non-invoked');


const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path, 'utf-8',(err, data) =>{
            if(err){
                reject(err)
            } else{
                resolve(data)
            }
        })

    })
}

const start = async() =>{
    try {
        const first = await getText('./content/first.txt');
        console.log(first);
    } catch (error) {
        console.log(error);
    }
}

start();
// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) =>console.log(err))