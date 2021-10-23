// Create variables for thewelcome messqge
var greeting = 'Hello ';
var name = 'Phil';
var message = ', please check your order:';
// Concatenate the three variables above to createthe welcome message
var welcome = greeting + name + message;

// create variables to hold details about the sign
var sign = '27 Abbeycroft Close';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//get the element that has the ID of greeting
var el = document.getElementById('greeting');
//replace the content of that element with the personalized welcome message
el.textContent = welcome;

//get the element that has the ID of userSign and update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

//get the element that has an id of tiles and update its contents
elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//get element that has an id of subTotal and update its contents
elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = subTotal;

//get element that has an id of shipping and update its contents
elShipping = document.getElementById('shipping');
elShipping.textContent = shipping;

//get element that has an id of grandTotal and update its contents
elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '£' + grandTotal;