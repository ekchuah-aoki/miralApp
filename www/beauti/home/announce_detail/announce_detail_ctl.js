angular.module('miral.beauti.home.announce.detail.controllers', [])

.controller('beautiHomeAnnounceDetailControllers', function($scope, $state,$ionicPopup) {

	$scope.favs = ['あさの','よしだ','パンダ','りんご'];
	
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
   };





})

;
