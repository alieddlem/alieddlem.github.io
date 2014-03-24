// Write our base functions
function showProduct(name){
var robot = Robots[name]

$(".overlay").show();
$(".details").show();
$("#detail-price").text("$" + robot.price);
$("#detail-title").text(robot.title);
$("#detail-image").attr("src", robot.image);
$("#detail-description").text(robot.description);

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

$(".product").click(function(){
	var name = $(this).data("product-id");
	showProduct(name);
});

$(".add-to-cart").click(function (){
	addtoCart();



});

$(".overlay").click(hideProduct);

});
