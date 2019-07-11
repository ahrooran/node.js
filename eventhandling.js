var events = require('events');
var eventEmmiter = new events.EventEmitter();

var myEventHandler = function(){
    console.log('i hear a scream');
}

eventEmmiter.on('late', myEventHandler);
eventEmmiter.emit('late');