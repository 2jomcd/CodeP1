$(document).ready(function() {
var turn = 0;

var picpre = "url(picsLib/mix/im";
var picsuf = ")";

var choosepic = function()	{
	var randnum = Math.floor((Math.random() * 20) + 1);
	var APic = picpre+randnum+picsuf;
	return APic
};

$('#a1').css('background-image', choosepic());
$('#a2').css('background-image', choosepic());
$('#a3').css('background-image', choosepic());
$('#a4').css('background-image', choosepic());
$('#a5').css('background-image', choosepic());
$('#a6').css('background-image', choosepic());
$('#a7').css('background-image', choosepic());
$('#a8').css('background-image', choosepic());
$('#a9').css('background-image', choosepic());

// load grid1 with 9 images
	// $(".av").click(function() {
	// 	var picp = "url(picsLib/mix/im";
	// 	var picnumY = Math.floor((Math.random() * 20) + 1);
	// 	var pics = ")";
	// 	var yPic = picp+picnumY+pics;
	// 	$(this).css("background", yPic);
	// });

	var picnumX = Math.floor((Math.random() * 20) + 1);
	var picnumO = Math.floor((Math.random() * 20) + 1);
	var xPic = picpre+picnumX+picsuf;
	var oPic = picpre+picnumO+picsuf;

var player_count = 0;

$(".av").click(function(e)  {
	player_count+=1;
	if (player_count === 1) {
		xPic = $(this).css('background-image');
	}
	else if (player_count > 1)  {
		oPic = $(this).css('background-image');
	}
	return xPic, oPic;
});


// display images
	$(".cell").click(function(e) {
		if (turn===0) {
			$(this).css('background-image', xPic);
			turn = 1;
		} 
		else {
			$(this).css('background-image', oPic);
			turn = 0;
		};
	});


});

