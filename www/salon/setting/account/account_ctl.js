angular.module('miral.salon.setting.account.controllers', ['miral.common.miralConst'])

.controller('salonSettingAccountControllers', function($scope, $state, ACCOUNT_SETTING_MODE) {

	//サロン：設定：基本情報の変更
	$scope.salonSettingAccountEdit=function() {
		$state.go('salon-setting-account_edit',{mode:ACCOUNT_SETTING_MODE.modify},'');
	}

	//サロン：設定：その他の設定
	$scope.salonSettingOtherEdit=function() {
		$state.go('salon-setting-other_edit',null,'');
	}

})

;
