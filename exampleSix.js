var application = angular.module('Store',[]);

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

application.controller("StoreBackEndController",function(){

	this.products = gems;

});

application.controller('ReviewController',function(){
	this.review = {};

	this.addReview = function(storeItems){
		storeItems.reviews.push(this.review);
		alert("Reviews");
		this.review = {};
	};
});