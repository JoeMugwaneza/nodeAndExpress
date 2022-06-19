const express = require('express');
const app = express();

const logger = require('./logger');

const {products, people} = require('./json/data')

// REQ => MIDDLEWARE => RES

app.use(logger)

app.get('/', (req, res)=>{
    res.send('Home')
})

app.get('/about', (req, res)=>{
    res.send("About")
})

app.get('/api/products', (req, res)=>{
    res.send(products)
})
app.listen(5000, ()=>{
    console.log("Fuckit, server is listening on port: 5000 ...");
})