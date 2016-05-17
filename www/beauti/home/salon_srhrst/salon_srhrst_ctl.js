angular.module('miral.beauti.home.salon_srhrst.controllers', [])

.controller('beautiHomeSalonSrhrstControllers', function($scope, $state) {

	//美容師：ホーム：検索結果（未️マッチ）
	$scope.beautiHomeSalonDetail=function() {
		$state.go('beauti-home-salon-detail',null,'');
	}


})

;
