/***
console.time(label)#

Used to calculate the duration of a specific operation. 
To start a timer, call the console.time() method,
giving it a unique label as the only parameter. To stop the timer, and to get the elapsed time in milliseconds,
just call the console.timeEnd() method, again passing the timer's unique label as the parameter.

**/

console.time("LabelForTimer");


for(var i = 1;i< 50;  i++) {
	
	console.log("Visitor : ", i );
	//console.timeEnd("LabelForTimer");


}

console.timeEnd("LabelForTimer");

// Output - ???






