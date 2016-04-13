angular.module('miral.beauti.setting.account_edit.controllers', ['miral.common.miralConst'])

.controller('beautiSettingAccountEditControllers', function($scope,$stateParams,ACCOUNT_SETTING_MODE) {

	$scope.mail_default ="sample@miral.co.jp";
	
	//入力項目は必ず配列にすること、でないと値が取得できない
//	$scope.login={};
//	$scope.login.userid = "";
//	$scope.login.password = "";

//	$scope.onChangePasswordShow=function(){
//		$scope.isShowPassword = !$scope.isShowPassword;
//	}
	
	//登録モードによって表示項目切り替え
	$scope.settingMode = $stateParams.mode;
	
	if($scope.settingMode == ACCOUNT_SETTING_MODE.sns){
		$scope.isShowPassword = false;
	}else{
		$scope.isShowPassword = true;
	}
	

})
;
