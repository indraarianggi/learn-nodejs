/**
 * Custom Event
 */

// import module
var events = require('events');
var util = require('util');

var Person = function(name) {
    this.name = name;
};

// Make Person inherits event emitter
util.inherits(Person, events.EventEmitter);

// Make object from Person
var indra = new Person('indra');
var arianggi = new Person('arianggi');
var surya = new Person('surya');
var people = [indra, arianggi, surya];


// Bind the event with the action
people.forEach(function(person) {
    person.on('speak', function(msg) {
        console.log(person.name + " said: " + msg);
    });
});


// Fire the event
indra.emit('speak', 'I learn Node.js now');
arianggi.emit('speak', 'That awesome dude');
surya.emit('speak', 'Can we learn it together?');