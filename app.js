const express = require('express');
const app = express();
const morgan = require('morgan')

let {products, people} = require('./json/data')

app.use(morgan('tiny'))

app.use(express.static('./methods-public'));

// PARSE FORM DATA
app.use(express.urlencoded({extended: false}))
// PARSE JSON
app.use(express.json());

app.get('/api/people', (req, res) =>{
    res.status(200).send({success: true, data: people});
    console.log(people);
});

app.post('/api/people', (req, res)=>{
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .json({success: false, msg: 'Please Provide Name Value'})
    }
    res.status(201).json({success: true, person: name})
})

app.post('/login', (req, res)=>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('Please Provide Credentials')
})

app.listen(5000, ()=>{
    console.log("Fuckit, server is listening on port: 5000 ...");
})