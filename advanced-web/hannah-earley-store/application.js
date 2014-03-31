// Write our base functions
function showProduct(name){
var prints = Prints[name];

$(".overlay").show();
$(".details").show();
$("#detail-price").text("$" + prints.price);
$("#detail-title").text(prints.title);
$("#detail-image").attr("src", prints.image);
$("#detail-description").text(prints.description);
$("#add-to-cart").click(function (){
	var quantity = parseInt($("#detail-quantity").val());
	addItem(name, quantity);



});

}

function hideProduct(){

$(".overlay").hide();
$(".details").hide();
$("#add-to-cart").off("click");
}

var Cart = { };

function subtotal(){
	var items = 0;
	var total = 0;
	for(var key in Cart) {
		var quantity = Cart[key];
		var prints = Prints[key];
		var itemPrice = quantity * prints.price;
		total += itemPrice;
		items += quantity;

	}
	$("#cart").text(items + " items " + "$" + total.toFixed(2));



}


function addItem(name, quantity){
	if(!Cart[name]) { Cart[name] = 0; }
   Cart[name] += quantity;
   subtotal();


}
// When the page loads, add in our event handlers
$(function() {

$(".current").click(function(){
	var name = $(this).data("product-id");
	showProduct(name);
});

$(".overlay").click(function() {
	hideProduct();
});
	
});
