$(document).ready(function() {
	// var xPic = "url(views/picsLib/moose/images(1).jpeg)";
	// var oPic = "url(views/picsLib/shoe/images(1).jpeg)";
	var picpre = "url(picsLib/mix/im";
	var picnumX = Math.floor((Math.random() * 20) + 1);
	var picnumO = Math.floor((Math.random() * 20) + 1);
	var picsuf = ")";
	var xPic = picpre+picnumX+picsuf;
	var oPic = picpre+picnumO+picsuf;
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

