//Report car application with the marks application dependency
var application = angular.module('ReportCard',['marks']);

var grades = [
	{ "FirstNumber": 45, 
    "SecondNumber": 91, 
    "CorrectAnswer": -46, 
    "YourAnswer": 12},

    { "FirstNumber": 7, 
    "SecondNumber": 40, 
    "CorrectAnswer": -33, 
    "YourAnswer": 22} ,

    { "FirstNumber": 67, 
    "SecondNumber": 19, 
    "CorrectAnswer": 48, 
    "YourAnswer": 33} ,

    { "FirstNumber": 55, 
    "SecondNumber": 34, 
    "CorrectAnswer": 21, 
    "YourAnswer": 44} ,

    { "FirstNumber": 68, 
    "SecondNumber": 40, 
    "CorrectAnswer": 28, 
    "YourAnswer": 55} 

];

//Report card controller
application.controller('ReportCardController',function(){
	this.reportCard = grades;
});

