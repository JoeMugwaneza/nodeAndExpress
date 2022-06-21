let {products, people} = require('../json/data');

// GET PEOPLE
const getPeople = (req, res) =>{
    res.status(200).send({success: true, data: people});
    console.log(people);
}

// CREATE A PERSON
const createPerson = (req, res)=>{
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .json({success: false, msg: 'Please Provide Name Value'})
    }
    res.status(201).json({success: true, person: name})
}

// CREATE PERSON POSTMAN
const createPersonPostman = (req, res) =>{
    const {name} = req.body

    if(!name){
        return res
        .status(404)
        .json({success: false, msg: "Please provide name value"})
    }
    res.status(200).send({success: true, data: [...people, name]})
}

// UPDATE PEOPLE
const updatePeople = (req, res) =>{
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
}


// DELETE PERSON
const deletePerson = (req,res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id))

    if(!person){
        res.status(404).json({success: false, msg: `no person with id ${id}`})
    } 

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success:true, data: newPeople})

}


module.exports = {
    getPeople, 
    createPerson,
    createPersonPostman,
    updatePeople,
    deletePerson
}