angular.module('miral.salon.schedule.reserv_hst.controllers', [])

.controller('salonScheduleReservHstControllers', function($scope, $state) {

	//サロン：スケジュール：今日の予定
	$scope.salonScheduleReservToday=function() {
		$state.go('salon-schedule-reserv_today',null,'');
	}

	//サロン：スケジュール：明日の予定
	$scope.salonScheduleReservTomorrow=function() {
		$state.go('salon-schedule-reserv_tomorrow',null,'');
	}

	//サロン：スケジュール：予約履歴
	$scope.salonScheduleReservHst=function() {
		$state.go('salon-schedule-reserv_hst',null,'');
	}
	
	//サロン：スケジュール：予約履歴_最新
	$scope.salonScheduleReservPast=function() {
		$state.go('salon-schedule-reserv_past',null,'');
	}

	//サロン：スケジュール：予約履歴_過去
	$scope.salonScheduleReservLatest=function() {
		$state.go('salon-schedule-reserv_latest',null,'');
	}
	
})

;
