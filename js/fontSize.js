$(document).ready(function () {
	$("#bigger").click(function () {
		$("#lunch").animate({fontSize: '+=0.5rem', height: '+=7.5rem'}, "slow");
	});
	$("#smaller").click(function () {
		$("#lunch").animate({fontSize: '-=0.5rem', height: '-=7.5rem'}, "slow");
	});
});