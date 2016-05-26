angular.module('miral.beauti.reserv.favorite.controllers', [])

.controller('beautiReservFavoriteControllers', function($scope, $state) {

	//美容師：ホーム：サロン詳細
	$scope.beautiHomeSalonDetail=function() {
		$state.go('beauti-home-salon-detail',null,'');
	}
	
	//美容師：予約：お気に入り
	$scope.beautiReservFavorite=function() {
		$state.go('beauti-reserv-favorite',null,'');
	}
	
	//美容師：予約：サロン一覧
	$scope.beautiReservSalonList=function() {
		$state.go('beauti-reserv-salon_list',null,'');
	}
	
})

;
