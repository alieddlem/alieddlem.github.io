var Cart = { };
var total = 0;

// Write our base functions
function checkOut() {
  var stripeKey = 'pk_test_V0SJ6QOh3rXO9s6Ysw0eHzzE';

  var description = $("#cart").text();
  var amount = total * 100;

  var handler = StripeCheckout.configure({
    key: stripeKey,
    image: 'http://alieddlem.github.io/advanced-web/hannah-earley-store/Images/LOGO.png',
    token: function(token, args) {
      $.post("/buy", {
        token: token.id,
        amount: amount,
        description: description
      },function(data) {
        alert(data.message);
      });
    }
  });


  handler.open({
    name: 'Hannah Earley Store',
    description: description,
    amount: amount
  });

}

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

$(".overlay").fadeOut("slow");
$(".details").fadeOut("slow");
$("#add-to-cart").off("click");
}





function addItem(name, quantity){
	if(!Cart[name]) { Cart[name] = 0; }
   Cart[name] += quantity;
   subtotal();


}


function subtotal(){
	var items = 0;
	
	for(var key in Cart) {
		var quantity = Cart[key];
		var prints = Prints[key];
		var itemPrice = quantity * prints.price;
		total += itemPrice;
		items += quantity;

	}

	$("#cart").text(items + " items " + "($" + total.toFixed(2) + ")");



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

	$("#cart").click(function() {
	checkOut();
	});

});
