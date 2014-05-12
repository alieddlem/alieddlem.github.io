function hideSplash(name){
	$("#explore-button").fadeOut("slow");
	$(".word").fadeOut("slow");
	$(".overlay").fadeOut("slow");
	
}

function showMainPageItems(name){
	$("nav").fadeIn("slow");

	
}

function showDetails (name){
var buildings = Buildings[name];
	$("#detail-title").text(buildings.title);
    $("#detail-image").attr("src", buildings.image);
    $("#detail-description").text(buildings.description);
    $("overlay-2").show();
}



// When the page loads, add in our event handlers
$(function() {

	$("#explore-button").click(function() {
	hideSplash();
	showMainPageItems();
	});

	$(".number").click(function(){
	var name = $(this).data("product-id");
	showDetails(name);
	});



});