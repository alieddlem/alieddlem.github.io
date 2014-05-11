function hideSplash(name){
	$("#explore-button").fadeOut("slow");
	$(".word").fadeOut("slow");
	$(".overlay").fadeOut("slow");
	
}

function showMainPageItems(name){
	$("#windows").fadeIn("slow");
	$("#half-title").fadeIn("slow");

	
}




// When the page loads, add in our event handlers
$(function() {
$("#explore-button").click(function() {
	hideSplash();
	showMainPageItems();
	});









});