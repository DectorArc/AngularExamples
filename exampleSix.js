//Decilaration of Application
var application = angular.module('Store',[]);

//Creation of data to put into the controller
this.gems = [
		{
		name: "Ruby",
		price: 17.95,
		description: "4 x 4 cube",
		canPurchase: true,
		imgSource:"./images/rubyBracelet.jpg",
		reviews:[
			{
				stars: 5,
				body:"I love this product!",
				author: "John Ruby"
			}
		]
	},
	{
		name: "Sapphire",
		price: 9.95,
		description: "4 x 4 cube",
		canPurchase: true,
		imgSource:"./images/sapphireBracelet.jpg",
		reviews:[
			{
				stars: 5,
				body:"I love this product!",
				author: "John Sapphire"
			}
		]
	},
	{
		name: "Emerald",
		price: 53.29,
		description: "4 x 4 cube",
		canPurchase: true,
		imgSource:"./images/emraldBracelet.jpg",
		reviews:[
			{
				stars: 5,
				body:"I love this product!",
				author: "John Emerald"
			}
		]
	},
	{
		name: "Jade",
		price: 99.95,
		description: "4 x 4 cube",
		canPurchase: false,
		imgSource:"./images/jadeBracelet.jpg",
		reviews:[
			{
				stars: 5,
				body:"I love this product!",
				author: "John Jade"
			}
		]
	}


];

//StoreBackEndController ties the created gems to the controllers products
application.controller("StoreBackEndController",function(){
	this.products = gems;
});

//ReviewController allows for the management of the StoreBackEndController.products.reviews
application.controller('ReviewController',function(){

	//Create a the internal review object
	this.review = {};

	//Add the review function to the StoreBackEndController.products.reviews collection

	//TIE TO THE OTHER CONTROLLER
	this.addReview = function(storeItems){
		storeItems.reviews.push(this.review);
		alert("Reviews");
		this.review = {};
	};
	//TIE TO THE OTHER CONTROLLER
	
});