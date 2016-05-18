var application = angular.module('Store',[]);

var gems = [
	{
		name: "Ruby",
		price: 17.95,
		description: "4 x 4 cube",
		canPurchase: true,
		imgSource:"./images/rubyBracelet.jpg"
	},
	{
		name: "Sapphire",
		price: 9.95,
		description: "4 x 4 cube",
		canPurchase: true,
		imgSource:"./images/sapphireBracelet.jpg"
	},
	{
		name: "Emerald",
		price: 53.29,
		description: "4 x 4 cube",
		canPurchase: true,
		imgSource:"./images/emraldBracelet.jpg"
	},
	{
		name: "Jade",
		price: 99.95,
		description: "4 x 4 cube",
		canPurchase: false,
		imgSource:"./images/jadeBracelet.jpg"
	}
];

application.controller("StoreController",function(){
	this.products = gems;
});