/*global angular, alert */
(function() {
    var uengine = angular.module('uengine',['ngRoute']);


    uengine.controller("MainCtrl",function($scope,$http,$location){
	$http({
	    method: 'GET',
	    url: '/welcome/user'
	}).then(
	    function(response){
		$scope.user = response.data.user;
	    }
	);
	$scope.createGame = function(){
	    $http({
		method: 'POST',
		url: '/games'
	    }).then( function(response){
		$scope.game = response.data.game;
		$location.path("/game");
	    });
	};
    });

    
    uengine.config(function($routeProvider){
	$routeProvider
	    .when("/", {
		controller: 'MainCtrl',
		templateUrl: '/views/main.html'
	    })
	    .when("/games", {
		controller: 'GameCtrl',
		templateUrl: '/views/game.html'
	    });
    });
		
	
    
}());


