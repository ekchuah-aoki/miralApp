angular.module('miral.beauti.setting.beauti_detail.controllers', [])

.controller('beautiSettingBeautiDetailControllers', function($scope) {
	
	$scope.user_name ="本田涼子";
	$scope.review ="";	
	$scope.user_name ="";
	$scope.user_name ="";
	
	$scope.search = function(){
		console.log($state.$current);

		var transition = $timeout(function(){
			$state.go('top.salon-search',null,'');
		});
	};
	
})
;
