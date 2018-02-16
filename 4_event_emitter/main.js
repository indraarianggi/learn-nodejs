var events = require('events');
var eventEmitter = new events.EventEmitter();


// listener #1
var listener1 = function() {
    console.log('listener #1 executed.');
}


// listener #2
var listener2 = function() {
    console.log('listener #2 executed.');
}

// bind the connection event with the listener #1 function
eventEmitter.on('connection', listener1);
// bind the connection event with the listener #2 function
eventEmitter.on('connection', listener2);


var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) listening to connection event.");


// fire the connection event
eventEmitter.emit('connection');


// remove the binding of listener #1 function
eventEmitter.removeListener('connection', listener1);
console.log("Listener #1 will not listen now.");


// fire the connection event
eventEmitter.emit('connection');


eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) listening to connection event.");


console.log("Program Ended.");