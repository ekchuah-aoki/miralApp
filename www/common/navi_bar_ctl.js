angular.module('miral.common.navi_bar.controllers', [])

.controller('commonNaviBarControllers', function($scope,$window, $state, $timeout,$ionicHistory) {

	console.log('Start CommonNaviBarControllers');
	
	$scope.onHome=function(){
		$state.go('beauti-home-home-top',null,'');
	}

	$scope.onReserv=function(){
		$state.go('beauti-reserv-reserv_home',null,'');
	}

	$scope.onSetting=function(){
		$state.go('beauti-setting-home',null,'');
	}
	
})
;


