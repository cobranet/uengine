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
	$scope.selectDice = function(id)
	{
	    alert("clicked" + id);
	};
 	// $scope.init = function(){
	//     append_die("d1",d3.select('#dice'),5,50,50,50,"blue","yellow");
    	//     append_die("d2",d3.select('#dice'),1,50,105,50,"green","white");
	// };
    });

    uengine.directive('dice', function () {
	var dice = {
	    restrict: 'E',
	    replace: false,
	    template: '<div class="dice"></div>',
	    scope: {
		number: '=number',
		svgid: '=svgid'
	    },
	    link: function(scope,ele,attributes) {
		console.log(ele[0]);
		var element = d3.select("#" + attributes.svgid);
		var number = attributes.number;
		var id ="d1";
		var cx = 50;
		var cy = 50;
		var width = 50;
		scope.$watch('number',function(newVal,oldVal){
		    console.log(newVal);
		    console.log(oldVal);
		});
		
		element.append("rect").attr("x", cx-width/2).attr("y", cy-width/2).attr("width", width).attr("height", width).attr("rx", width/6).attr("ry", width/6)
		    .attr("id",id).attr("ng-click","selectDice()").attr("class","dice").attr("ng-init","counter=0");
		if (number == 1) {
		    element.append("circle").attr("cx", cx).attr("cy", cy).attr("r", width/8);
		}
		if (number == 2) {
		    element.append("circle").attr("cx", cx+width/4).attr("cy", cy+width/4).attr("r", width/8).attr("class","dot");
		    element.append("circle").attr("cx", cx-width/4).attr("cy", cy-width/4).attr("r", width/8).attr("class","dot");
		}
		if (number == 3) {
		    element.append("circle").attr("cx", cx).attr("cy", cy).attr("r", width/8).attr("class","dot");
		    element.append("circle").attr("cx", cx+width/4).attr("cy", cy+width/4).attr("r", width/8).attr("class","dot");
		    element.append("circle").attr("cx", cx-width/4).attr("cy", cy-width/4).attr("r", width/8).attr("class","dot");
		}
		if (number == 4) {
		    element.append("circle").attr("cx", cx+width/4).attr("cy", cy+width/4).attr("r", width/8).attr("class","dot");
		    element.append("circle").attr("cx", cx-width/4).attr("cy", cy-width/4).attr("r", width/8).attr("class","dot");
		    element.append("circle").attr("cx", cx+width/4).attr("cy", cy-width/4).attr("r", width/8).attr("class","dot");
		    element.append("circle").attr("cx", cx-width/4).attr("cy", cy+width/4).attr("r", width/8).attr("class","dot");
		}
		if (number == 5) {
		    element.append("circle").attr("cx", cx).attr("cy", cy).attr("r", width/8);
		    element.append("circle").attr("cx", cx+width/4).attr("cy", cy+width/4).attr("r", width/8).attr("class","dot");
		    element.append("circle").attr("cx", cx-width/4).attr("cy", cy-width/4).attr("r", width/8).attr("class","dot");
		    element.append("circle").attr("cx", cx+width/4).attr("cy", cy-width/4).attr("r", width/8).attr("class","dot");
		    element.append("circle").attr("cx", cx-width/4).attr("cy", cy+width/4).attr("r", width/8).attr("class","dot");
		}
		if (number == 6) {
		    element.append("circle").attr("cx", cx+width/4).attr("cy", cy+width/4).attr("r", width/8).attr("class","dot");
		    element.append("circle").attr("cx", cx-width/4).attr("cy", cy-width/4).attr("r", width/8).attr("class","dot");
		    element.append("circle").attr("cx", cx+width/4).attr("cy", cy-width/4).attr("r", width/8).attr("class","dot");
		    element.append("circle").attr("cx", cx-width/4).attr("cy", cy+width/4).attr("r", width/8).attr("class","dot");
		    element.append("circle").attr("cx", cx+width/4).attr("cy", cy).attr("r", width/8).attr("class","dot");
		    element.append("circle").attr("cx", cx-width/4).attr("cy", cy).attr("r", width/8).attr("class","dot");
		}
		
		
	    }
	    
	};
	return dice;
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


