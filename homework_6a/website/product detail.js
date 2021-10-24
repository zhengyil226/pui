var cost = 6.5;
var size_cost = 0;
var glazing_cost = 0;
var qty = 1;

/* Update price according to user selection. */

function updatePrice(button){
	if (button == 1) {
		size_cost = 0;
	}
	if (button == 2) {
		size_cost = 4;
	}
	if (button == 3) {
		glazing_cost = 0;
	}
	if (button == 4) {
		glazing_cost = 0.5;
	}
	if (button == 5) {
		glazing_cost = 0.5;
	}
	if (button == 6) {
		glazing_cost = 1;
	}
	displayPrice();
}

/* Display updated price in the add to cart button. */

function displayPrice(){
	document.getElementById("cost").innerText = "$" + (cost + size_cost + glazing_cost).toFixed(2);
}

/* When clicking on add to cart, quantity of item is updated. */

function updateQty(){
	qty += 1;
	document.getElementById("numItem").innerText = qty;
}