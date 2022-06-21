const express = require('express');
const router = express.Router();

let {products, people} = require('../json/data');

router.get('/', (req, res) =>{
    res.status(200).send({success: true, data: people});
    console.log(people);
});

// CREATE FUNCTIONALITY
router.post('/', (req, res)=>{
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .json({success: false, msg: 'Please Provide Name Value'})
    }
    res.status(201).json({success: true, person: name})
})

// UPDATE FUNCTIONALITY
router.put('/:id', (req, res) =>{
    const {id} = req.params
    const {name} = req.body
    
    const person = people.find((person) => person.id === Number(id));

    if(!person){
        return res.status(404).json({success: false, msg:`no person with id ${id}`})
    }

    const newPeople = people.map((person) =>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPeople})
})

// DELETE FUNCTIONALITY
router.delete('/:id', (req,res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id))

    if(!person){
        res.status(404).json({success: false, msg: `no person with id ${id}`})
    } 

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success:true, data: newPeople})

})


module.exports = router;