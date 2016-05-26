angular.module('miral.salon.home.home_top.controllers', ['miral.common.navi_bar.controllers'])

.controller('salonHomeHomeTopControllers', function($scope, $state, miralNaviBarUtil) {

	//Naviバー表示制御
	miralNaviBarUtil.show();
	
	// = 遷移 = = = = = = = = = =
	//サロン：ホーム：シェアリクエスト
	$scope.salonScheduleShareRequest=function() {
		$state.go('salon-schedule-share_request',null,'');
	}
	
	//サロン：スケジュール：メッセージ
	$scope.salonScheduleMessageList=function() {
		$state.go('salon-schedule-message_list',null,'');
	}
	
	//サロン：スケジュール：スケジュール
	$scope.salonScheduleReservToday=function() {
		$state.go('salon-schedule-reserv_today',null,'');
	}
	
	//サロン：ホーム：おしらせ詳細
	$scope.salonHomeAnnounceDetail=function() {
		$state.go('salon-home-announce_detail',null,'');
	}

	//サロン：ホーム：おしらせ一覧
	$scope.salonHomeAnnounce=function() {
		$state.go('salon-home-announce',null,'');
	}

	//美容師：ホーム：ミラルのてびき
	$scope.salonHomeGuidesMiral=function() {
		$state.go('beauti-home-guides_miral',null,'');
	}
	
	//サロン：ホーム：ご意見お問い合わせ
	$scope.salonHomeRequest=function() {
		$state.go('salon-home-request',null,'');
	}
	
	//サロン：設定：ホーム
	$scope.salonSettingSettingHome=function() {
		$state.go('salon-setting-setting_home',null,'');
	}


})

;
