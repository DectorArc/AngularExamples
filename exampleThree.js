//Module For Store
var application = angular.module('Store',[]);

//Array of JSON to help out with list type displays
var stones = [
	{
		name: "Ruby",
		price: 17.95,
		description: "4 x 4 cube",
		canPurchase: true
	},
	{
		name: "Sapphire",
		price: 9.95,
		description: "4 x 4 cube",
		canPurchase: true
	},
	{
		name: "Emerald",
		price: 53.29,
		description: "4 x 4 cube",
		canPurchase: true
	},
	{
		name: "Jade",
		price: 99.95,
		description: "4 x 4 cube",
		canPurchase: false
	}
];

application.controller("ItemsController",function(){
	this.products = stones;
});