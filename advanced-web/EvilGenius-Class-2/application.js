// Write our base functions
function showProduct(name){
var robot = Robots[name];

$(".overlay").show();
$(".details").show();
$("#detail-price").text("$" + robot.price);
$("#detail-title").text(robot.title);
$("#detail-image").attr("src", robot.image);
$("#detail-description").text(robot.description);
$("#add-to-cart").click(function() {
		 var quantity = parseInt($("#detail-quantity").val());
		 addItem(name, quantity);
		 //alert(quantity);
	});
}

function hideProduct(){

$(".overlay").hide();
$(".details").hide();
$("#add-to-cart").off("click");
}

 var Cart = {};


/*function updateCart(){
for(var key in Cart) {
      var quantity = Cart[key];
      var itemPrice = subtotal(key, quantity);
      total += itemPrice;

    }
}*/

function subtotal() {
	var items = 0;
	var total = 0;
	for(var key in Cart) {
      var quantity = Cart[key];
      var robot = Robots[key];
      var itemPrice = quantity * robot.price;
      total += itemPrice;
      items += quantity;
    }


	$("#cart").text(items + " items " + "$" + total.toFixed(2));
	//$("#check-out").text()
}

/*function showItem(name, quantity, price){
	var item = $("<div class='item'>")
}*/

function addItem(name, quantity){
 	if(!Cart[name]) { Cart[name] = 0; }
   Cart[name] += quantity;
   subtotal();
}
// When the page loads, add in our event handlers
$(function() {

$(".product").click(function(){
	var name = $(this).data("product-id");
	showProduct(name);


});

$(".overlay").click(hideProduct);

});


//$(".add-to-cart").click(alert("HEY"));