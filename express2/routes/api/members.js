const express = require('express');
const uuid = require('uuid');
let members = require('../../members');
const router = express.Router();

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


// CREATE A NEW MEMBER
router.post('/', (req, res) =>{
    // res.send(req.body)

    const newMember = {
        id: uuid.v4(),
        name: req.body.name, 
        email: req.body.email,
        status: 'active'
    }

    if(!newMember.name || !newMember.email){
       return res.status(400).json({msg: 'Please include the name or email!'})
    }

    members.push(newMember)
    res.status(200).json(members);
})

module.exports = router;