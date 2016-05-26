angular.module('miral.beauti.setting.beauti_edit.controllers', [])

.controller('beautiSettingBeautiEditControllers', function($scope, $state,$ionicPopup) {

	$scope.user_name ="本田涼子";
	$scope.reviwe_vel ="5.0";
	$scope.reviwe_num ="3";

	$scope.birthday_year ="1988";
	$scope.birthday_month ="01";
	$scope.birthday_day ="09";
	
	$scope.gender ="女";
	
	$scope.stylist_his ="6";
	$scope.license ="所有";	
	
	//美容師：設定：マイプロフィール
	$scope.beautiSettingBeautiDetail=function() {
		$state.go('beauti-setting-beauti_detail',null,'');
	}

	
});
