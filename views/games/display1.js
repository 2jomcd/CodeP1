$(document).ready(function() {
var turn = 0;
var gamestart = false;
var picpre = "url(picsLib/mix/im";
var picsuf = ")";
var choosepic = function()	{
	var randnum = Math.floor((Math.random() * 200) + 101);
	var aPic = picpre+randnum+picsuf;
	return aPic
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

var Pic1 = 'Pic1';
var Pic2 = 'Pic2';

// assign pics to player1=1Pic and player2 = 2Pic
var player_count = 0;
$(".av").click(function(e)  {
	if (player_count>1) {return};
	player_count+=1;
	if (player_count === 1) {
		Pic1 = $(this).css('background-image');
		$('#p11').css('background-image', Pic1);
	}
	else if (player_count > 1)  {
		Pic2 = $(this).css('background-image');
		$('#p21').css('background-image', Pic2);
		gamestart = true;
		//clear board
		setTimeout(function() {
			$('.av').css('background-image', 'none');
		}, 500);
	};
	return Pic1, Pic2, gamestart;
});

// display images
$(".av").click(function(e) {
		if (turn===0) {
			$(this).css('background-image', Pic1);
			turn = 1;
		} 
		else {
			$(this).css('background-image', Pic2);
			turn = 0;
		};
	});
});

