var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);

app.controller('TableCtrl',function($scope, $http){
	$scope.users = []; //declare an empty array
	$http.get("dummyData.json").success(function(response){ 
		$scope.users = response;  //ajax request to fetch data into $scope.data
	});
	
	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}
});