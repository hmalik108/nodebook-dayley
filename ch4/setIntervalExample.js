
/**

setInterval(callback, delay[, arg][, ...])
------------------------------------------
Schedules repeated execution of callback every delay milliseconds. 
Returns a intervalObject for possible use with clearInterval. Additional optional arguments may be passed to the callback.

To follow browser behavior, when using delays larger than 2147483647 milliseconds (approximately 25 days) or less than 1, Node.js will use 1 as the delay.
**/
var x = 0 , y = 0, z = 0;

function displayValues() {

	console.log("X=%d; Y=%d; Z=%d",x,y,z);
}

function updateX(){

	x +=1 ;
}

function updateY(){
	y += 1; 
}

function updateZ(){
	z += 1;
	displayValues();
}


var X_Id = setInterval(updateX, 500);
setInterval(updateY, 1000);
setInterval(updateZ, 2000);
//clearInterval(X_Id);



//Output ???? 
