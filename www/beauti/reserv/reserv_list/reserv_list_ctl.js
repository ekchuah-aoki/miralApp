angular.module('miral.beauti.reserv.reserv_list.controllers', [])

.controller('beautiReservReservListControllers', function($scope, $state) {

	//美容師：予約：サロン検索結果（マッチ済：MAP）
	$scope.beautiReservReservMap=function() {
		$state.go('beauti-reserv-reserv_map',null,'');
	}

	//美容師：ホーム：サロン詳細
	$scope.beautiHomeSalonDetail=function() {
		$state.go('beauti-home-salon-detail',null,'');
	}
	
})

;
