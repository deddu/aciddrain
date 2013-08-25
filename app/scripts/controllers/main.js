'use strict';

angular.module('webApp')
  .controller('MainCtrl', function ($scope) {
  	//here's a list of dictionaries of comments entries: keys (atm) are user and text
    $scope.rants = [{
    	user:"Geppetto",
    	text:"I hope my stupid kid get eaten by a whale."
    },
    {
    	user:"Mario",
    	text:"can't believe that silly **ch got kidnapped again."
    }
    ];
    $scope.update = function(){ 
    	
    	$scope.rants.push(angular.copy($scope.new_rant));};
    $scope.reverse= function(arr){ return [].concat(arr).reverse();};
  });
