angular.module('miral.salon.setting.account.controllers', [])

.controller('salonSettingAccountControllers', function($scope, $state) {

	//サロン：設定：基本情報の変更
	$scope.salonSettingAccountEdit=function() {
		$state.go('salon-setting-account_edit',null,'');
	}

	//サロン：設定：その他の設定
	$scope.salonSettingOtherEdit=function() {
		$state.go('salon-setting-other_edit',null,'');
	}

})

;
