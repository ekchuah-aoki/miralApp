angular.module('miral.beauti.reserv.reserv_map.controllers', [])

.controller('beautiReservReservMapControllers', function($scope, $state) {

	//美容師：ホーム：お知らせ詳細
	$scope.beautiHomeAnnounceDetail=function() {
		$state.go('beauti-home-announce_detail',null,'');
	}

	//美容師：予約：サロン検索結果（マッチ済：リスト）
	$scope.beautiReservReservList=function() {
		$state.go('beauti-reserv-reserv_list',null,'');
	}

})

;
