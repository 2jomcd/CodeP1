$(document).ready(function() {
	// alert("jQuery is working")
	var turn = 0;
	$(".cell").click(function(e) {
		// alert("click");
		if (turn===0)  {
			turn = 1;
			$(this).css("background","url(views/pics/scout.png)");
		}
		else  {
			turn = 0;
			$(this).css("background","url(views/pics/chase.png)");
		}



	});


});