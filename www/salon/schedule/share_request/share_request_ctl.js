angular.module('miral.salon.schedule.share_request.controllers', [])

.controller('salonScheduleShareRequestControllers', function($scope, $state,$ionicPopup) {

	//サロン：スケジュール：美容一覧
	$scope.salonScheduleBeautiList=function() {
		$state.go('salon-schedule-beauti_list',null,'');
	}
	
	//サロン：スケジュール：シェアリクエスト
	$scope.salonScheduleShareRequest=function() {
		$state.go('salon-schedule-share_request',null,'');
	}
	
	//サロン：スケジュール：メッセージ
	$scope.salonScheduleMessage=function() {
		$state.go('salon-schedule-message',null,'');
	}
	
	//美容師：設定：マイプロフィール
	$scope.beautiSettingBeautiDetail=function() {
		$state.go('beauti-setting-beauti_detail',null,'');
	}
	
	// シェアリクエスト　ポップアップ
	$scope.shareRequestPopup = function() {	
	  // ポップアップ詳細
	  var shareRequestPopup = $ionicPopup.show({
		template: '',
	    title: 'シェアリクエストを許可しますか',
	    cssClass:'share_request_popup',
	    scope: $scope,
	    buttons: [
	      { text: 'キャンセル' },
	      { text: '許可する',type: 'c01'}
	    ]
	  });
	};
	
	// シェアリクエスト　ポップアップ
	$scope.shareRequestNoPopup = function() {	
	  // ポップアップ詳細
	  var shareRequestNoPopup = $ionicPopup.show({
		template: '',
	    title: 'シェアリクエストを拒否しますか',
	    cssClass:'share_request_no_popup',
	    scope: $scope,
	    buttons: [
	      { text: 'キャンセル' },
	      { text: '拒否する',type: 'c01'}
	    ]
	  });
	};
	
})

;
