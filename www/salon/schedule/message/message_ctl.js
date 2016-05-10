angular.module('miral.salon.schedule.message.controllers', [])

.controller('salonScheduleMessageControllers', function($scope, $state,$ionicPopup) {

	// メッセージ入力　ポップアップ
	$scope.mesInput = function() {
	  $scope.data = {};

	  // ポップアップ詳細
	  var messageInput = $ionicPopup.show({
	    template: '<textarea placeholder="Comments" class="reserv_message_input"></textarea>',
	    title: 'メッセージ入力してください',
	    cssClass:'message_button',
	    scope: $scope,
	    buttons: [
	      { text: 'キャンセル' },
	      { text: '<b>送信</b>',type: 'c01'}
	    ]
	  });
	 };
	
})

;
