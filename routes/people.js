const express = require('express');
const router = express.Router();

let {products, people} = require('../json/data');

const {getPeople, 
    createPerson,
    createPersonPostman,
    updatePeople,
    deletePerson} = require('../controller/people');

router.get('/', getPeople);

// CREATE FUNCTIONALITY
router.post('/', createPerson)

// CREATE PERSON POSTMAN
router.post('/postman', createPersonPostman)

// UPDATE FUNCTIONALITY
router.put('/:id', updatePeople)

// DELETE FUNCTIONALITY
router.delete('/:id', deletePerson)


module.exports = router;