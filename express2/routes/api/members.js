const express = require('express');
const router = express.Router();
let members = require('../../members');


// GET ALL MEMBERS
router.get('/', (req, res) => res.json(members))


// GET ONE MEMBER

router.get('/:id', (req, res) =>{
    const found = members.some(member => member.id === Number(req.params.id));

    if(found){
        res.status(200).json(members.filter((member) => member.id === Number(req.params.id)))
    } else{
        res.status(400).json({success: false, msg: `No member with the id ${req.params.id} found`})
    }
})