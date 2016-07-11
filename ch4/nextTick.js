var fs = require("fs");



setImmediate(function(){
	console.log("Immediate Timer 1 Executed");
});
fs.stat("nexttick.js", function(err,stats){
	if(stats) {
		console.log("nexttick.js Exists");
	}
});



setImmediate(function(){
	console.log("Immediate Timer 2 Executed");
});

process.nextTick(function(){
	console.log("Next Tick 1 Executed");
});

process.nextTick(function(){
	console.log("Next Tick 2 Executed");
});


process.nextTick(function(){
	console.log("Next Tick 2 Executed");
});


function simpleTimeout(consoleTimer) {
	
	console.timeEnd(consoleTimer);

}

console.time("twoSecond");
setTimeout(function(){
console.log("hello")}, 0, "twoSecond");


