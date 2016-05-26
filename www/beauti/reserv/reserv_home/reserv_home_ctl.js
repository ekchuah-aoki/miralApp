angular.module('miral.beauti.reserv.reserv_home.controllers', [])

.controller('beautiReservReservHomeControllers', function($scope,$window, $state, $timeout, $ionicSideMenuDelegate) {

	//美容師：ホーム：サロン詳細
	$scope.beautiHomeSalonDetail=function() {
		$state.go('beauti-home-salon-detail',null,'');
	}
	
	//美容師：予約：予約ホーム
	$scope.beautiReservReservHome=function() {
		$state.go('beauti-reserv-reserv_home',null,'');
	}
	
	//美容師：予約：サロン検索結果（マッチ済：リスト）
	$scope.beautiReservReservList=function() {
		$state.go('beauti-reserv-reserv_list',null,'');
	}

	//美容師：予約：サロン一覧
	$scope.beautiReservSalonList=function() {
		$state.go('beauti-reserv-salon_list',null,'');
	}

	//美容師：予約：一覧・履歴・詳細表示
	$scope.beautiReservReservInfo=function() {
		$state.go('beauti-reserv-reserv_info',null,'');
	}

	//美容師：予約：メッセージ一覧
	$scope.beautiReservMessageList=function() {
		$state.go('beauti-reserv-message_list',null,'');
	}

})
;
