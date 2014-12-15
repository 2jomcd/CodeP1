$(document).ready(function() {

	var count = 0;
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

// display images
	$(".cell").click(function(e) {
		if (turn===0) {
			$(this).css("background", dog);
			turn = 1;
		} 
		else {
			$(this).css("background", cat);
			turn = 0;		
		}
	});

// reset on reset button click
	$("#resetbutton").click(function(e) {location.reload()});

});

