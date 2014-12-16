$(document).ready(function() {
	// var xPic = "url(views/picsLib/moose/images(1).jpeg)";
	// var oPic = "url(views/picsLib/shoe/images(1).jpeg)";
	
	var xPic = "url(views/picsLib/horse/im3)";
	var oPic = "url(views/picsLib/cat/im15)";
	var turn = 0; 
	// console.log("t1  " + turn);
	// $("#dogbutton").click(function(e) {
	// 	turn = 0;
	// });
	// $("#catbutton").click(function(e) {
	// 	turn = 1;
	// });

// display images
	$(".cell").click(function(e) {
		if (turn===0) {
			$(this).css("background", xPic);
			turn = 1;
		} 
		else {
			$(this).css("background", oPic);
			turn = 0;
		};
	});

// reset on reset button click
	// $("#resetbutton").click(function(e) {location.reload()});

});

