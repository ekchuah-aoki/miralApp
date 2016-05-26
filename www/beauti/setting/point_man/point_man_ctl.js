angular.module('miral.beauti.setting.point_man.controllers', [])

.controller('beautiSettingPointManControllers', function($scope,$state) {
	
	//遷移
	//美容師：設定：ポイント購入
	$scope.beautiSettingPointBuy=function() {
		$state.go('beauti-setting-point_buy',null,'');
	}

	
})
;
