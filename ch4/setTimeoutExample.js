/***

console.time(label)
-------------------
Used to calculate the duration of a specific operation. To start a timer, call the console.time() method, 
giving it a unique label as the only parameter. To stop the timer, and to get the elapsed time in milliseconds,
 just call the console.timeEnd() method, again passing the timer's unique label as the parameter.


 **********


setTimeout(callback, delay[, arg][, ...])
-----------------------------------------
Schedules execution of a one-time callback after delay milliseconds. 
Returns a timeoutObject for possible use with clearTimeout. Additional optional arguments may be passed to the callback.

The callback will likely not be invoked in precisely delay milliseconds.
Node.js makes no guarantees about the exact timing of when callbacks will fire, nor of their ordering. The callback will be called as close as possible to the time specified.

To follow browser behavior, when using delays larger than 2147483647 milliseconds (approximately 25 days) or less than 1, the timeout is executed immediately, as if the delay was set to 1.

**/


function simpleTimeout(consoleTimer) {
	
	console.timeEnd(consoleTimer);

}

console.time("twoSecond");
setTimeout(simpleTimeout, 2000, "twoSecond");
console.time("oneSecond");
setTimeout(simpleTimeout, 1000, "oneSecond");
console.time("fiveSecond");
setTimeout(simpleTimeout, 5000, "fiveSecond");
console.time("50MilliSecond");
setTimeout(simpleTimeout, 50, "50MilliSecond");





/* 
function simpleTimeout(consoleTimer) {
	
	console.timeEnd(consoleTimer);

}

console.time("twoSecond");
setTimeout(simpleTimeout, 2000, "twoSecond");
console.time("oneSecond");
setTimeout(simpleTimeout, 1000, "oneSecond");
console.time("fiveSecond");
setTimeout(simpleTimeout, 5000, "fiveSecond");
console.time("50MilliSecond");
//setTimeout(simpleTimeout, 50, "50MilliSecond");
setTimeout(simpleTimeout, 50, "50MilliSecond1");
*/



/* Testing clearTimeout(timeoutObject)  -> 


function simpleTimeout(consoleTimer) {
	
	console.timeEnd(consoleTimer);

}

console.time("twoSecond");
setTimeout(simpleTimeout, 2000, "twoSecond");
console.time("oneSecond");
setTimeout(simpleTimeout, 1000, "oneSecond");
console.time("fiveSecond");
setTimeout(simpleTimeout, 5000, "fiveSecond");


console.time("50MilliSecond");
var  FiftyMilliSecId = setTimeout(simpleTimeout, 50, "50MilliSecond");
clearTimeout(FiftyMilliSecId);


*/



/* Output -- ??

function simpleTimeout(consoleTimer) {
	
	console.timeEnd(consoleTimer);

}

console.log("twoSecond");
setTimeout(simpleTimeout, 2000, "twoSecond");
console.time("oneSecond");
setTimeout(simpleTimeout, 1000, "oneSecond");
console.time("fiveSecond");
setTimeout(simpleTimeout, 5000, "fiveSecond");
console.time("50MilliSecond");
setTimeout(simpleTimeout, 50, "50MilliSecond");
*/


