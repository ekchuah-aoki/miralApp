angular.module('miral.salon.setting.salon_edit.controllers', [])

.controller('salonSettingSalonEditControllers', function($scope, $state) {

	//入力項目の初期化
	$scope.conditions = "店内は禁煙です。";
	$scope.conditions_1 = "オーナーのXXXです。";

	
	/*　リンク　*/
	$scope.salonPrf=function() {
		$state.go('salon-setting-salon_detail',null,'');
	}

})

;
