const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//let event name = response

customEmitter.on('response', (name,id)=>{
    console.log(`data recieved user ${name} with id ${id}`)
})
customEmitter.on('response', ()=>{
    console.log('some other logic here')
})



customEmitter.emit('response', 'john', 34)

