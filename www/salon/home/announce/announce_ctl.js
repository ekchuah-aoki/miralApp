angular.module('miral.salon.home.announce.controllers', [])

.controller('salonHomeAnnounceControllers', function($scope, $state) {

	//サロン：ホーム：おしらせ詳細
	$scope.salonHomeAnnounceDetail=function() {
		$state.go('salon-home-announce_detail',null,'');
	}
	
})

;
