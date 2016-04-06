angular.module('miral.beauti.common.navi_bar.controllers', [])

.controller('beautiCommonNaviBarControllers', function($scope,$window, $state, $timeout,$ionicHistory) {

	console.log('Start beautiCommonNaviBarControllers');
	
	
	$scope.moveReservHome=function(){
		navi_page_foward($state, 'beauti-reserv_home-reserv_list');
	};
	
	
	$scope.pageBack=function(){
		$ionicHistory.backView();
	};
})
;


