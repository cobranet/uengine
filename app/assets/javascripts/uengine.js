/*global angular, alert, $, append_die, d3 */
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
		console.log(JSON.stringify(response.data));
		$location.path("/games/" + $scope.game.id );
	    });
	};
    });


    uengine.controller("GameCtrl",function($scope,$location,$http,$routeParams){
	$http({
	    method:'GET',
	    url: '/games/' +$routeParams.id , 
	}).then( function(response) {
	    $scope.game = response.data.game;
	    $location.path("/games/" + $routeParams.id );
	});
	$scope.selectDice = function()
	{
	    alert("clicked");
	};
	$scope.init = function(){
	    append_die("d1",d3.select('#dice'),5,50,50,50,"blue","yellow");
    	    append_die("d2",d3.select('#dice'),1,50,105,50,"green","white");
	};
    });
    
    
    uengine.config(function($routeProvider){
	$routeProvider
	    .when("/", {
		controller: 'MainCtrl',
		templateUrl: '/views/main.html'
	    })
	    .when("/games/:id", {
		controller: 'GameCtrl',
		templateUrl: '/views/game.html'
	    });
    });
		
	
    
}());


