$(document).ready(function() {
	var dogPic= "url(views/pics/scout.png)";
	var catPic = "url(views/pics/chase.png)";
	var turn = 0; 
	console.log("t1  " + turn);
	$("#dogbutton").click(function(e) {
		turn = 0;
	});
	$("#catbutton").click(function(e) {
		turn = 1;
	});

// display images
	$(".cell").click(function(e) {
		if (turn===0) {
			$(this).css("background", dogPic);
			turn = 1;
		} 
		else {
			$(this).css("background", catPic);
			turn = 0;
		};
	});

// reset on reset button click
	$("#resetbutton").click(function(e) {location.reload()});

});

