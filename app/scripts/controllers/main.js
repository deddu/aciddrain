'use strict';

angular.module('webApp')
  .controller('MainCtrl', function ($scope) {
  	//here's a list of dictionaries of comments entries: keys (atm) are user and text
    $scope.rants = [{
    	user:"geppetto",
    	text:"my wood took life and walk away from me"
    },
    {
    	user:"Mario",
    	text:"that silly **ch got kidnapped again."
    }
    ];
    $scope.update = function(){ 
    	var new_ = angular.copy($scope.new_rant);
    	$scope.rants.push(new_);};
    $scope.reverse= function(arr){ return [].concat(arr).reverse();};
  });
