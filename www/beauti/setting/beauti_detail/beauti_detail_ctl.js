angular.module('miral.beauti.setting.beauti_detail.controllers', [])

.controller('beautiSettingBeautiDetailControllers', function($scope,$state) {
	
	$scope.user_name ="本田涼子";
	$scope.reviwe_vel ="5.0";
	$scope.reviwe_num ="3";

	$scope.birthday_year ="1988";
	$scope.birthday_month ="01";
	$scope.birthday_day ="09";
	
	$scope.gender ="女";
	
	$scope.stylist_his ="6";
	$scope.license ="所有";	

	//遷移
	//美容師：設定：マイプロフィールの編集
	$scope.beautiSettingBeautiEdit=function() {
		$state.go('beauti-setting-beauti_edit',null,'');
	}

	
})
;
