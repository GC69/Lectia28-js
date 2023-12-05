"use strict";

// Cite milisecunde sunt intr-un an
// 1.Cite zile sunt intr-un an
var days = 365; // 2.Cite ore sunt in aceste zile

var hours = days * 24; // 3.Cite minute sunt in aceste ore

var minutes = hours * 60; // 4.Cite secunde sunt in aceste minute

var seconds = minutes * 60; // 5.Cite milisecinde sunt in aceste secunde

var miliseconds = seconds * 1000;
console.log(hours, minutes, seconds, miliseconds);