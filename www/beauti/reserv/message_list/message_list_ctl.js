angular.module('miral.beauti.reserv.message_list.controllers', [])

.controller('beautiReservMessageListControllers', function($scope,$window, $state, $timeout, $ionicSideMenuDelegate) {

	//美容師：予約：予約ホーム
	$scope.beautiReservReservHome=function() {
		$state.go('beauti-reserv-reserv_home',null,'');
	}
	
	//美容師：予約：一覧・履歴・詳細表示
	$scope.beautiReservReservInfo=function() {
		$state.go('beauti-reserv-reserv_info',null,'');
	}
	
	//美容師：予約：メッセージ一覧
	$scope.beautiReservMessageList=function() {
		$state.go('beauti-reserv-message_list',null,'');
	}

	//美容師：予約：メッセージ
	$scope.beautiReservMessage=function() {
		$state.go('beauti-reserv-message',null,'');
	}

})
;
