angular.module('miral.beauti.home.salon_detail.controllers', [])

.controller('beautiHomeSalonDetailControllers', function($scope, $state,$ionicPopup) {

	//美容師：予約：予約
	$scope.beautiReservReservation=function() {
		$state.go('beauti-reserv-reservation',null,'');
	}

	// シェアリクエスト　ポップアップ
	$scope.BeautiShareRequestPopup = function() {	
	  // ポップアップ詳細
	  var BeautiShareRequestPopup = $ionicPopup.show({
		template: '',
	    title: 'このサロンにシェアリクエストを送りますか？',
	    cssClass:'share_request_popup',
	    scope: $scope,
	    buttons: [
	      { text: 'キャンセル' },
	      { text: 'リクエストを送る',type: 'c01'}
	    ]
	  });
	};


})

;
