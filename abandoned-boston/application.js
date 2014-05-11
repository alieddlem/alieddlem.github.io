function hideSplash(name){
	$("#explore-button").fadeOut("slow");
	$(".word").fadeOut("slow");
	$(".overlay").fadeOut("slow");
	
}

function showMainPageItems(name){
	$("#windows").fadeIn("slow");
	$("#half-title").fadeIn("slow");

	
}

function showDetails (name){
	$("#detail-title").text(prints.title);
    $("#detail-image").attr("src", prints.image);
    $("#detail-description").text(prints.description);
    $("overlay-2").show();
}



// When the page loads, add in our event handlers
$(function() {
$("#explore-button").click(function() {
	hideSplash();
	showMainPageItems();
	});

$(".current").click(function(){
	var name = $(this).data("product-id");
	showDetails(name);
	});









});