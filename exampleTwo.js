//Module Setup
var application = angular.module('Store',[]);

var stone = {
	name: "Ruby",
	price: 17.95,
	description: "4 x 4 cube"
}

application.controller("StoreController",function(){
	//Created instance variable product to be called by the controller
	this.product = stone;
});

