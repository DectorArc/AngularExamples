var application = angular.module('GemStore',[]);

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

application.controller('StoreController',function(){
	this.products = gems;
});

application.directive('placeholder',function(){
	return{
		//e stands for element
		restrict: 'E',
		templateUrl: 'exampleEight-A.html'
	};
});

application.directive('holder',function(){
	return{
		//e stands for element
		restrict: 'A',
		templateUrl: 'exampleEight-A.html'
	};
})