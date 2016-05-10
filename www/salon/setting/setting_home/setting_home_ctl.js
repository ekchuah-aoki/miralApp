angular.module('miral.salon.setting.setting_home.controllers', [])

.controller('salonSalonSettingSettingHomeControllers', function($scope, $state) {

	/* ユーザー情報 */
	$scope.salon_name = 'salon Hair Design';

	/*　リンク　*/
	$scope.salonPrf=function() {
		$state.go('salon-setting-salon_detail',null,'');
	}
	
	$scope.salonPoi=function() {
		$state.go('salon-setting-point_man',null,'');
	}	
	
	$scope.salonRev=function() {
		$state.go('salon-setting-review',null,'');
	}	
	
	$scope.salonSet=function() {
		$state.go('salon-setting-account',null,'');
	}	
	
	$scope.salonTer=function() {
		$state.go('salon-setting-terms',null,'');
	}	
	
	$scope.salonPri=function() {
		$state.go('salon-setting-privacy_policy',null,'');
	}	
	
	$scope.salonSclt=function() {
		$state.go('salon-setting-sclt',null,'');
	}	
	
	
})

;
