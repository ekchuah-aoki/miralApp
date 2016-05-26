angular.module('miral.beauti.home.home_top.controllers', ['miral.common.navi_bar.controllers'])

.controller('beautiHomeHomeTopControllers', function($scope,$window, $state, $timeout, $ionicHistory, miralNaviBarUtil) {

	console.log('Start beautiHomeHomeTopControllers');

	//$scope.search = function(){
		//console.log($state.$current);

		//var transition = $timeout(function(){
			//$state.go('top.salon-search',null,'');
		//});
	//};
	
	miralNaviBarUtil.show();
	
	//　遷移　
	//美容師：ホーム：検索結果（未️マッチ）
	$scope.beautiHomeSalonSrhrst=function() {
		$state.go('beauti-home-salon_srhrst',null,'');
	}
	
	//美容師：ホーム：お知らせ詳細
	$scope.beautiHomeAnnounceDetail=function() {
		$state.go('beauti-home-announce_detail',null,'');
	}

	//美容師：ホーム：お知らせ
	$scope.beautiHomeAnnounce=function() {
		$state.go('beauti-home-announce',null,'');
	}
	
	//美容師：ホーム：ミラルのてびき
	$scope.beautiHomeGuidesMiral=function() {
		$state.go('beauti-home-guides_miral',null,'');
	}
	
	//美容師：ホーム：オーナーのてびき
	$scope.beautiHomeGuidesOwner=function() {
		$state.go('beauti-home-guides_owner',null,'');
	}
	
	//美容師：ホーム：ご意見・お問い合わせ
	$scope.beautiHomeRequest=function() {
		$state.go('beauti-home-request',null,'');
	}

})
;
