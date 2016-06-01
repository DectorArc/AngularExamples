var application = angular.module('marks',[]);

application.directive("card",function(){
	return {
		restrict: 'E',
		templateUrl: "exampleTen-A.html"
	}
});
