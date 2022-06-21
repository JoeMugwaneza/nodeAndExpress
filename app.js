const express = require('express');
const app = express();
const morgan = require('morgan')

const people = require('./routes/people');
const auth = require('./routes/auth');

app.use(morgan('tiny'))

app.use(express.static('./methods-public'));

// PARSE FORM DATA
app.use(express.urlencoded({extended: false}))
// PARSE JSON
app.use(express.json());

app.use('/api/people', people)
app.use('/login', auth)







app.listen(5000, ()=>{
    console.log("Fuckit, server is listening on port: 5000 ...");
})