angular.module('miral.salon.setting.point_man.controllers', [])

.controller('salonSettingPointManControllers', function($scope, $state) {

	//サロン：設定：過去の売上
	$scope.salonSettingPointHst=function() {
		$state.go('salon-setting-point_hst',null,'');
	}
	
	
})

;
