var application = angular.module('Store',[]);


application.controller("PannelController",function(){
	this.tab = 1;

	this.shoutOut = function(){
		alert("Here is the basic example of two way data binding");
	}

	//Changes the selected tab for the controller
	this.selectTab = function(selection){
		this.tab = selection;
		//alert(this.tab);
	}

	//Checks what selection you have made
	this.isSelected = function(selection){
		return this.tab == selection;
	}
});