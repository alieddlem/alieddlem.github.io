// Write our base functions
function showProduct(name){
var prints = Prints[name]

$(".overlay").show();
$(".details").show();
$("#detail-price").text("$" + prints.price);
$("#detail-title").text(prints.title);
$("#detail-image").attr("src", prints.image);
$("#detail-description").text(prints.description);

}

function hideProduct(){

$(".overlay").hide();
$(".details").hide();
}

var Cart = { "frog": 4, "bird" : 1, "cat": 2}

function subtotal(items, quantity){
	return prices[items] * quantity


}

function updateCart(){
for(var key in Cart) {
      var quantity = Cart[key];
      var itemPrice = subtotal(key, quantity);
      total += itemPrice;
    }
}
function addtoCart(){

$("#cart").text("test");
}
// When the page loads, add in our event handlers
$(function() {

$(".current").click(function(){
	var name = $(this).data("product-id");
	showProduct(name);
});

$(".add-to-cart").click(function (){
	addtoCart();



});

$(".overlay").click(hideProduct);

});
