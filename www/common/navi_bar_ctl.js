angular.module('miral.common.navi_bar.controllers', ['miral.loginInfo', 'miral.common.miralConst'])

.controller('commonNaviBarControllers', function($scope,$window, $state, $timeout,$ionicHistory, loginInfo, ACCOUNT_TYPE) {

	console.log('Start CommonNaviBarControllers');
	
	
	
	$scope.changeNaviBar=function(){
		userInfo = loginInfo.getUserInfo();
		
		if( userInfo.acType == ACCOUNT_TYPE.beauti ){
			$scope.accountIsBeauti = true; 
		}else{
			$scope.accountIsBeauti = false; 
		}
	}
	
	$scope.onHome=function(){
		$ionicHistory.nextViewOptions({
			disableBack: true
		});		
		$state.go('beauti-home-home-top',null,'');
	}

	$scope.onReserv=function(){
		$ionicHistory.nextViewOptions({
			disableBack: true
		});		
		$state.go('beauti-reserv-reserv_home',null,'');
	}

	$scope.onSetting=function(){
		$ionicHistory.nextViewOptions({
			disableBack: true
		});		
		$state.go('beauti-setting-home',null,'');
	}

	
	$scope.onSalonHome=function(){
		$ionicHistory.nextViewOptions({
			disableBack: true
		});		
		$state.go('ssalon-home-home_top',null,'');
	}
	
	$scope.onSalonSetting=function(){
		$ionicHistory.nextViewOptions({
			disableBack: true
		});		
		$state.go('salon-setting-setting_home',null,'');
	}
})
;


