angular.module('miral.beauti.home.announce.controllers', [])

.controller('beautiHomeAnnounceControllers', function($scope, $state) {

	//美容師：ホーム：お知らせ詳細
	$scope.beautiHomeAnnounceDetail=function() {
		$state.go('beauti-home-announce_detail',null,'');
	}


})

;
