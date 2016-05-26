angular.module('miral.salon.schedule.beauti_list.controllers', [])

.controller('salonScheduleBeautiListControllers', function($scope, $state) {

	//サロン：スケジュール：美容一覧
	$scope.salonScheduleBeautiList=function() {
		$state.go('salon-schedule-beauti_list',null,'');
	}
	
	//サロン：スケジュール：シェアリクエスト
	$scope.salonScheduleShareRequest=function() {
		$state.go('salon-schedule-share_request',null,'');
	}
	
	//美容師：設定：マイプロフィール
	$scope.beautiSettingBeautiDetail=function() {
		$state.go('beauti-setting-beauti_detail',null,'');
	}

})

;
