var application = angular.module("ReportCard",[]);

application.controller("ReportCardController",['$http',function($http){
	var card = this;

	card.lineItems = [];

	$http.get('/animals.json').success(function(data){
		card.lineItems = data;
		alert("Good");
	})

}]);