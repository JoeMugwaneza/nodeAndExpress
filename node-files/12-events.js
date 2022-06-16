// EVENTS
const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response',(name, id)=>{
    console.log(`Data received from user: ${name}, with id: ${id}`);
})

customEmitter.emit('response', 'Mugwaneza Joseph', 4);