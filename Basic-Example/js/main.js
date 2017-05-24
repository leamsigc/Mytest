// Create a variable for the welcome message
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order;';
//Concatenate the three variables above to create the welcome message
var welcome = greeting+name+message;
//Create the variable to hold details about the sign
var sign  = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal+shipping;
//Get the element that have the id of greeting
var el =  document.getElementById('greeting');
//Replace the content of that element whit the personalized welcome message
el.textContent=welcome;
//Get the element that have the id of userSign then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent=sign;
//Get the element that have the id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;
//Get the element that have the id of subTotal then update its contents
var elsubTotal = document.getElementById('subTotal');
elsubTotal.textContent = '$'+subTotal;
//Get the element that have the id of shipping then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$'+shipping;
//Get the element that have the id of granTotal then update its contents
var elGranTotal = document.getElementById('granTotal');
elGranTotal.textContent =  '$'+grandTotal;

