angular.module('miral.salon.home.home_top.controllers', [])

.controller('salonHomeHomeTopControllers', function($scope, $state) {

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
		$state.go('salon-home-anounce_detail',null,'');
	}

	//サロン：ホーム：おしらせ一覧
	$scope.salonHomeAnnounce=function() {
		$state.go('salon-home-anounce',null,'');
	}

	//美容師：ホーム：ミラルのてびき
	$scope.salonHomeGuidesMiral=function() {
		$state.go('beauti-home-guides_miral',null,'');
	}
	
	//サロン：ホーム：ご意見お問い合わせ
	$scope.salonHomeRequest=function() {
		$state.go('salon-home-request',null,'');
	}


})

;
