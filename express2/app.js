const express = require('express');
const app = express();
const path = require('path');
const logger = require('./middleware/logger')
let members = require('./members');


// INIT MIDDLEWARE
app.use(logger);

// GET ALL MEMBERS
app.get('/api/members', (req, res) => res.json(members))


// GET ONE MEMBER

app.get('/api/members/:id', (req, res) =>{
    const found = members.some(member => member.id === Number(req.params.id));

    if(found){
        res.status(200).json(members.filter((member) => member.id === Number(req.params.id)))
    } else{
        res.status(400).json({success: false, msg: `No member with the id ${req.params.id} found`})
    }
})

app.use(express.static(path.join(__dirname, "public")))


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Fuckit, the server is running on port: ${PORT}`));