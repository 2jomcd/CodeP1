
// connect JS variables to HTML elements
var c1 =			document.querySelector("#c1");
var c2 = 			document.querySelector("#c2");
var c3 = 			document.querySelector("#c3");
var c4 = 			document.querySelector("#c4");
var c5 = 			document.querySelector("#c5");
var c6 = 			document.querySelector("#c6");
var c7 = 			document.querySelector("#c7");
var c8 = 			document.querySelector("#c8");
var c9 = 			document.querySelector("#c9");
// var dogButton =  	document.querySelector("#dogbutton");
// var catButton = 	document.querySelector("#catbutton");
var count = 0;

var mark = "X";
// dogButton.onclick = function() {mark = "X"};
// catButton.onclick = function() {mark = "O"};

// init tally's for each win vector

var row1 = 0; 
var row2 = 0;
var row3 = 0;
var col1 = 0;
var col2 = 0;
var col3 = 0;
var dia1 = 0;
var dia2 = 0;


// change cells and record tallies

c1.onclick = function() {										
		if (mark==="X") {row1 += 1; col1 += 1; dia2 +=1}
			else {row1 += 5; col1 +=5; dia2 +=5} 					
		count+=1;
		checkResult();												
}
c2.onclick = function() {
	if (mark==="X") {row1 += 1; col2 += 1} 
		else {row1 += 5; col2+=5}
	count+=1;	
	checkResult();
}
c3.onclick = function() {
	if (mark==="X") {row1 += 1; col3 += 1; dia1 +=1} 
		else {row1 += 5; col3 +=5; dia1 +=5}
	count+=1;
	checkResult();
}
c4.onclick = function() {
		if (mark==="X") {row2 += 1; col1 += 1} 
		else {row2 += 5; col1 +=5}
	count+=1;
	checkResult();
}
c5.onclick = function() {
	if (mark==="X") {row2 += 1; col2 += 1; dia1 +=1; dia2 +=1} 
		else {row2 += 5; col2 +=5; dia1 +=5; dia2 +=5}
	count+=1;
	checkResult();
}
c6.onclick = function() {
	if (mark==="X") {row2 += 1; col3 += 1} 
		else {row2 += 5; col3 +=5}
	count+=1;
	checkResult();
}
c7.onclick = function() {
	if (mark==="X") {row3 += 1; col1 += 1; dia1 +=1} 
		else {row3 += 5; col1 +=5; dia1 +=5}
	count+=1;
	checkResult();
}
c8.onclick = function() {
	if (mark==="X") {row3 += 1; col2 += 1} 
		else {row3 += 5; col2 +=5}
	count+=1;
	checkResult();
}
c9.onclick = function() {
	if (mark==="X") {row3 += 1; col3 += 1; dia2 +=1} 
		else {row3 += 5; col3 +=5; dia2 +=5}
	count+=1;
	checkResult();
}

// Switch marks
// check for winner or 9 boxes used
checkResult = function() {
if (mark==="X") {mark="O"} else {mark="X"};
if (row1===3||row2===3||row3===3||col1===3||col2===3||col3===3||dia1===3||dia2===3) {
	// alert("X WINS!")}
	setTimeout(function(){alert('PLAYER 1 WINS!')}, 600)}
else if (row1===15||row2===15||row3===15||col1===15||col2===15||col3===15||dia1===15||dia2===15) { 
	setTimeout(function(){alert('PLAYER 2 WINS!')}, 600) }
else if (count===9) {setTimeout(function(){alert('DRAW GAME OVER')}, 600)   }
}























