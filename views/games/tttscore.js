
// count all clicks on play grid


// connect JS variables to HTML elements
var c1 =			document.querySelector("#a1");
var c2 = 			document.querySelector("#a2");
var c3 = 			document.querySelector("#a3");
var c4 = 			document.querySelector("#a4");
var c5 = 			document.querySelector("#a5");
var c6 = 			document.querySelector("#a6");
var c7 = 			document.querySelector("#a7");
var c8 = 			document.querySelector("#a8");
var c9 = 			document.querySelector("#a9");


// initialize turn counter
// set to -2 to account for 2 clicks to select avatar pics
var count = -2;
// initialize global, tally variables for 8 win vectors

var row1 = 0; 
var row2 = 0;
var row3 = 0;
var col1 = 0;
var col2 = 0;
var col3 = 0;
var dia1 = 0;
var dia2 = 0;

// zeros all vector tallys after avatars are selected
var reset = function(){
	row1 = 0; 
	row2 = 0;
	row3 = 0;
	col1 = 0;
	col2 = 0;
	col3 = 0;
	dia1 = 0;
	dia2 = 0;
};

if (count===0) {reset()};

// record tallies and check for winner as each cell is clicked
c1.onclick = function() {
	if (count===0) {reset()};
		count+=1;							
		if (count%2!=0) {row1 += 1; col1 += 1; dia2 +=1}
			else {row1 += 5; col1 +=5; dia2 +=5} 					
		console.log(count);
		checkResult();												
}
c2.onclick = function() {
	if (count===0) {reset()};
	count+=1;
	if (count%2!=0) {row1 += 1; col2 += 1} 
		else {row1 += 5; col2+=5}	
	console.log(count);
	checkResult();
}
c3.onclick = function() {
	if (count===0) {reset()};
	count+=1;
	if (count%2!=0) {row1 += 1; col3 += 1; dia1 +=1} 
		else {row1 += 5; col3 +=5; dia1 +=5}
	console.log(count);
	checkResult();
}
c4.onclick = function() {
	if (count===0) {reset()};
	count+=1;
	if (count%2!=0)  {row2 += 1; col1 += 1} 
		else {row2 += 5; col1 +=5}
	console.log(count);
	checkResult();
}
c5.onclick = function() {
	if (count===0) {reset()};
	count+=1;
	if (count%2!=0) {row2 += 1; col2 += 1; dia1 +=1; dia2 +=1} 
		else {row2 += 5; col2 +=5; dia1 +=5; dia2 +=5}
	console.log(count);
	checkResult();
}
c6.onclick = function() {
	if (count===0) {reset()};
	count+=1;
	if (count%2!=0)  {row2 += 1; col3 += 1} 
		else {row2 += 5; col3 +=5}
	console.log(count);
	checkResult();
}
c7.onclick = function() {
	if (count===0) {reset()};
	count+=1;
	if (count%2!=0)  {row3 += 1; col1 += 1; dia1 +=1} 
		else {row3 += 5; col1 +=5; dia1 +=5}
	console.log(count);
	checkResult();
}
c8.onclick = function() {
	if (count===0) {reset()};
	count+=1;
	if (count%2!=0)  {row3 += 1; col2 += 1} 
		else {row3 += 5; col2 +=5}
	console.log(count);
	checkResult();
}
c9.onclick = function() {
	if (count===0) {reset()};
	count+=1;
	if (count%2!=0) {row3 += 1; col3 += 1; dia2 +=1} 
		else {row3 += 5; col3 +=5; dia2 +=5}
	console.log(count);
	checkResult();
}


// check for winner or 9 boxes used
checkResult = function() {
if (row1===3||row2===3||row3===3||col1===3||col2===3||col3===3||dia1===3||dia2===3) {
	setTimeout(function(){alert('PLAYER 1 WINS!')}, 200)
}
else if (row1===15||row2===15||row3===15||col1===15||col2===15||col3===15||dia1===15||dia2===15) { 
	setTimeout(function(){alert('PLAYER 2 WINS!')}, 200) 
}
else if (count===9) {
	setTimeout(function(){alert('DRAW GAME OVER')}, 200)
}
console.log("r1 "+row1);
console.log("r2 "+row2);
console.log("r3 "+row3);
console.log("c1 "+col1);
console.log("c2 "+col2);
console.log("c3 "+col3);
console.log("d1 "+dia1);
console.log("d2 "+dia2);
};























