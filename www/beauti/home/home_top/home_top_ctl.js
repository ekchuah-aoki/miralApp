angular.module('miral.beauti.home.home_top.controllers', [])

.controller('beautiHomeHomeTopControllers', function($scope,$window, $state, $timeout, $ionicHistory) {

	console.log('Start beautiHomeHomeTopControllers');


	$scope.search = function(){
		console.log($state.$current);

		var transition = $timeout(function(){
			$state.go('top.salon-search',null,'');
		});
	};

})
;
