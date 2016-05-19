angular.module('miral.salon.setting.salon_edit.controllers', [])

.controller('salonSettingSalonEditControllers', function($scope, $state) {

	/*　リンク　*/
	$scope.salonPrf=function() {
		$state.go('salon-setting-salon_detail',null,'');
	}
})

;
