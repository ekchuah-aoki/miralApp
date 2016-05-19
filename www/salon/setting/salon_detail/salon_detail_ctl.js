angular.module('miral.salon.setting.salon_detail.controllers', [])

.controller('salonSettingSalonDetailControllers', function($scope, $state) {

	
	/*　リンク　*/
	$scope.salonEdi=function() {
		$state.go('salon-setting-salon_edit',null,'');
	}
	
	$scope.galleryEdi=function() {
		$state.go('salon-setting-gallery_edit',null,'');
	}
	
	
	
})

;
