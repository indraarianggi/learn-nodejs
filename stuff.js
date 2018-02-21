/**
 * Module
 * 
 * How to export all module
 */

/*
// 1
module.exports.counter = function(arr) {
    return "There are " + arr.length + " element(s) in this array.";
}


// 2
var adder = function(a, b) {
    return `${a} + ${b} = ${a+b}`;
}

module.exports.adder = adder;

*/


// 3
var counter = function(arr) {
    return "There are " + arr.length + " element(s) in this array.";
}

var adder = function(a, b) {
    return `${a} + ${b} = ${a+b}`;
}

var subtract = function(a, b) {
    return `${a} - ${b} = ${a-b}`;
}

var pi = 3.142;

module.exports = {
    counter: counter,
    adder: adder,
    subtract: subtract,
    pi: pi
}

/**
 * exports => object
 * counter, adder, subtact, pi => properties
 */