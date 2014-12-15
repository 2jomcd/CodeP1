$(document).ready(function() {

var count = 0;
var r1=0,r2=0,r3=0,c1=0,c2=0,c3=0,d1=0,d2=0;
var dog = "url(views/pics/scout.png)";
var cat = "url(views/pics/chase.png)";
var turn = 1; 
console.log("t1  " + turn);
$("#dogbutton").click(function(e) {
		turn = 0; console.log("t2  "+turn);
	});
$("#catbutton").click(function(e) {
		turn = 1; console.log("t3  "+turn);
	});

// display images and check score
	$(".cell").click(function(e) {
		if (turn===0) {
			$(this).css("background", dog);
			console.log("t4  "+ turn);
			turn = 1;
			console.log("t5  "+ turn);
		// if (r1===3||r2===3||r3===3||c1===3||c2===3||c3===3||d1===3||d2===3)
		// 	{alert("X WINS!"); return};
		// else if (r1===15||r2===15||r3===15||c1===15||c2===15||c3===15||d1===15||d2===15)
		// 	{alert("O WINS!"); return};
		};
		else {
			$(this).css("background", cat);
			console.log("t6  "+ turn);
			turn = 0;
			console.log("t7 "+ turn);
		// if (r1===3||r2===3||r3===3||c1===3||c2===3||c3===3||d1===3||d2===3)
		// 	{alert("X WINS!"); return};
		// else if (r1===15||r2===15||r3===15||c1===15||c2===15||c3===15||d1===15||d2===15)
		// 	{alert("O WINS!"); return};			
		};
		// count+=1;
		// console.log("count " + count);
		// if (count===9) {alert("Draw. Game over")};
	});

// keep score
	// $(".r1").click(function(e) {
	// 	if (turn=0) {r1+=1} else {r1+=5};
	// $(".r2").click(function(e) {
	// 	if (turn=0) {r2+=1} else {r2+=5}});
	// $(".r3").click(function(e) {
	// 	if (turn=0) {r3+=1} else {r3+=5}});
	// $(".c1").click(function(e) {
	// 	if (turn=0) {c1+=1} else {c1+=5}});
	// $(".c2").click(function(e) {
	// 	if (turn=0) {c2+=1} else {c2+=5}});
	// $(".c3").click(function(e) {
	// 	if (turn=0) {c3+=1} else {c3+=5}});
	// $(".d1").click(function(e) {
	// 	if (turn=0) {d1+=1} else {d1+=5}});
	// $(".d2").click(function(e) {
	// 	if (turn=0) {d2+=1} else {d2+=5}});

// reset on reset button click
	$("#resetbutton").click(function(e) {location.reload()});

});

