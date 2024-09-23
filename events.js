var events = require('events');

var eventEmitter = new events.EventEmitter();

var myEventHandler = () =>{
    console.log(' I am John Doe');
};

eventEmitter.on('name', myEventHandler);

eventEmitter.emit('name');