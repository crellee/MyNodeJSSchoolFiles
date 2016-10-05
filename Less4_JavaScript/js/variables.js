"use strict";


var name = '15';
console.log(typeof name);

name = 15;
console.log(typeof name);

name = true;
console.log(typeof name);

name = null;
console.log(typeof name);

name = undefined; //ligesom var x; - Du definererer ikke en fløjtende!
console.log(typeof name);

var obj = {};
console.log(typeof obj);

obj = function(){};		//
obj = [];				//Array? Det er et objekt.

//equality
console.log(1 == true);
console.log(1 === '1');





     var flight = {
         airline: "Oceanic",
         number: 815,
         departure: {
             IATA: "SYD",
             time: "2004-09-22 14:55",
             city: "Sydney"
	}, arrival: {
             IATA: "LAX",
             time: "2004-09-23 10:42",
             city: "Los Angeles"

	} 
};

//console.log(typeof flight.departure.IATA);


var a = 1;
var b = 1;

var add = function (a, b) 
{ 
	return a + b;
};


