angular.module('miral.beauti.reserv.reserv_info.controllers', [])

.controller('beautiReservReservInfoControllers', function($scope, $state ,$ionicPopup) {

		$scope.test = 'この予約をキャンセルする';
	
	   // A confirm dialog
	   $scope.showConfirm = function() {
	     var confirmPopup = $ionicPopup.confirm({
	       title: '予約キャンセル',
	       cssClass: 'cancel_button',
	       template: '<dl><dt>この予約をキャンセルしてしまってよろしいですか？</dt><dd>店舗名：salon Hair Desein</dd><dd>予約日時：2016/00/00 12:00~14:00</dd></dl>',
	       cancelText:'閉じる',
	       okType:'c01',
	       okText: 'キャンセルする'
	     });

	     confirmPopup.then(function(res) {
	         if(res) {
	           console.log('You are sure');
	         } else {
	           console.log('You are not sure');
	         }
	       });
	     
	   };

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
		
		//美容師：設定：レビューの投稿
		$scope.beautiSettingReviewEdit=function() {
			$state.go('beauti-setting-review_edit',null,'');
		}

})

;
