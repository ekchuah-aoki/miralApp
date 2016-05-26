angular.module('miral.common.navi_bar.controllers', ['miral.loginInfo', 'miral.common.miralConst'])

.controller('commonNaviBarControllers', function($scope,$window, $state, $timeout,$ionicHistory, loginInfo, ACCOUNT_TYPE) {

	console.log('Start CommonNaviBarControllers');
	
	//ナビボタン非表示
	$scope.showNavi4Beauti = false;
	$scope.showNavi4Salon = false;
	
	
	$scope.onHome=function(){
		
		if($ionicHistory.currentStateName() == 'beauti-home-home-top'){
			return;
		}
		
		$ionicHistory.nextViewOptions({
			disableBack: true
		});		
		$state.go('beauti-home-home-top',null,'');
	}

	$scope.onReserv=function(){
		
		if($ionicHistory.currentStateName() == 'beauti-reserv-reserv_home'){
			return;
		}

		$ionicHistory.nextViewOptions({
			disableBack: true
		});		
		$state.go('beauti-reserv-reserv_home',null,'');
	}

	$scope.onSetting=function(){
		
		if($ionicHistory.currentStateName() == 'beauti-setting-home'){
			return;
		}

		$ionicHistory.nextViewOptions({
			disableBack: true
		});		
		$state.go('beauti-setting-home',null,'');
	}

	
	$scope.onSalonHome=function(){

		if($ionicHistory.currentStateName() == 'salon-home-home_top'){
			return;
		}
		
		$ionicHistory.nextViewOptions({
			disableBack: true
		});		
		$state.go('salon-home-home_top',null,'');
	}
	
	$scope.onSalonSetting=function(){

		if($ionicHistory.currentStateName() == 'salon-setting-setting_home'){
			return;
		}
		
		$ionicHistory.nextViewOptions({
			disableBack: true
		});		
		$state.go('salon-setting-setting_home',null,'');
	}
	
	$scope.changeNaviBar=function(show){
	  //Naviバーの状態を設定

		if(!show){
			$scope.showNavi4Beauti = false;
			$scope.showNavi4Salon = false;
			return;
		}
		
		var userInfo = loginInfo.getUserInfo();
		
		if (!userInfo.accountId){
			//まだログインされていなければ、何もしない
			return;
		}
		
		//アカウントタイプによって、表示するNaviBarを切り替える
		if( userInfo.acType == ACCOUNT_TYPE.beauti ){
			$scope.showNavi4Beauti = true;
			$scope.showNavi4Salon = false;
			console.debug('NaviBar 美容師用設定')
		}else{
			$scope.showNavi4Beauti = false;
			$scope.showNavi4Salon = true;
			console.debug('NaviBar サロン用設定')
		}
		
		//$scope.apply();
	
	}
	
})
.factory('miralNaviBarUtil', function(loginInfo,ACCOUNT_TYPE) {
	'use strict';
	  return {
		  show:function(){
				//Naviバーの状態を設定
				var scope = angular.element(document.getElementById('miralNaviBer')).scope();
				scope.changeNaviBar(true);
		  },
		  hide:function(){
				var scope = angular.element(document.getElementById('miralNaviBer')).scope();
				scope.changeNaviBar(false);
		  }
	  };
})

;


