angular.module('miral.salon.schedule.message_list.controllers', [])

.controller('salonScheduleMessageListControllers', function($scope, $state) {

	//サロン：スケジュール：メッセージ
	$scope.salonScheduleMessage=function() {
		$state.go('salon-schedule-message',null,'');
	}
	
})

;
