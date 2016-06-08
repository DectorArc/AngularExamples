var application = angular.module("ReportCard",[]);

/*Simple controller that uses build in Ajax calls
	+ Note the dependency injection past the first argument of the applicaiton controler
	+ with $http you can specify success criteria and as well as the method type by one of two ways

	- $http.get(JSON).success(function(data){...})
	- $http.post(JSON).success(function(data){...})
	- $http.put(JSON).success(function(data){...})
	- $http.delete(JSON).success(function(data){...})
	
	From the Angular Site
	$http({ method: 'GET', url: '/someUrl'})
	.then(function successCallback(response) {

     + this callback will be called asynchronously
   	 + when the response is available

    }, function errorCallback(response) {

     + called asynchronously if an error occurs
     + or server returns response with an error status.

    });

*/

var card = null;

application.controller("ReportCardController",['$http',function($http){
	card = this;

	card.lineItems = [];

	$http.get('/answers.json').success(function(data){
		card.lineItems = data;
		
	});

	

}]);

application.directive('reportstatus',function(){
	return {
		restrict:'E',
		templateUrl:'exampleEleven-A.html'
	};
});