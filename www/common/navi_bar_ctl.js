angular.module('miral.common.navi_bar.controllers', [])

.controller('commonNaviBarControllers', function($scope,$window, $state, $timeout,$ionicHistory) {

	console.log('Start CommonNaviBarControllers');
	
	$scope.onHome=function(){
		$ionicHistory.nextViewOptions({
			disableBack: true
		});		
		$state.go('beauti-home-home-top',null,'');
	}

	$scope.onReserv=function(){
		$ionicHistory.nextViewOptions({
			disableBack: true
		});		
		$state.go('beauti-reserv-reserv_home',null,'');
	}

	$scope.onSetting=function(){
		$ionicHistory.nextViewOptions({
			disableBack: true
		});		
		$state.go('beauti-setting-home',null,'');
	}
	
})
;


