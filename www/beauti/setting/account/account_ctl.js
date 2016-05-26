angular.module('miral.beauti.setting.account.controllers', ['miral.common.miralConst'])

.controller('beautiSettingAccountControllers', function($scope, $state,$ionicPopup,ACCOUNT_SETTING_MODE) {

	//基本情報の変更
	$scope.accountEdit=function(){
		$state.go('beauti-setting-account_edit',{mode:ACCOUNT_SETTING_MODE.modify},'');
	}
})

;
