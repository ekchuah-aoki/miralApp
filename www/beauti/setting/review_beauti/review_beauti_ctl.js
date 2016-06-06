angular.module('miral.beauti.setting.review_beauti.controllers', [])

.controller('beautiSettingReviewBeautiControllers', function($scope, $state,$ionicPopup) {

	//美容師：設定：サロンレビュー
	$scope.beautiSettingReviewSalon=function() {
		$state.go('beauti-setting-review_salon',null,'');
	}

	//美容師：設定：スタイリストレビュー
	$scope.beautiSettingReviewBeauti=function() {
		$state.go('beauti-setting-review_beauti',null,'');
	}
	

})

;
