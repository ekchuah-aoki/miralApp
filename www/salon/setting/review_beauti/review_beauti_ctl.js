angular.module('miral.salon.setting.review_beauti.controllers', [])

.controller('salonSettingReviewBeautiControllers', function($scope, $state) {

	//サロン：設定：サロンレビュー
	$scope.salonSettingReviewSalon=function() {
		$state.go('salon-setting-review_salon',null,'');
	}

	//サロン：設定：スタイリストレビュー
	$scope.salonSettingReviewBeauti=function() {
		$state.go('salon-setting-review_beauti',null,'');
	}
	
})

;
