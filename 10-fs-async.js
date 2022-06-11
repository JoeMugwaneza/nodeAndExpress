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
})