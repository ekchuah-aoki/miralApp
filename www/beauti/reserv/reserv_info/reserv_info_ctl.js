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

})

;
