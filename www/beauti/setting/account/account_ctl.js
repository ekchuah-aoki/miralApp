angular.module('miral.beauti.setting.account.controllers', ['miral.common.miralConst'])

.controller('beautiSettingAccountControllers', function($scope, $state,$ionicPopup,ACCOUNT_SETTING_MODE) {

	//基本情報の変更
	$scope.accountEdit=function(){
		$state.go('beauti-setting-account_edit',{mode:ACCOUNT_SETTING_MODE.modify},'');
	}
	
	//美容師免許の登録
	$scope.licenseEdit=function(){
		$state.go('beauti-setting-license_edit',null,'');
	}
	
	//美容師：設定：退会
	//$scope.beautiSettingWithdrawal=function() {
	//$state.go('beauti-setting-withdrawal',null,'');
	//}
	
})

;
