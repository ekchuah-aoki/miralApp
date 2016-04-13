angular.module('miral.login.controllers', ['miral.login.login_fnc','miral.common.miralConst','miral.common.googleplus'])

.controller('loginControllers', function($scope, $state, miralLoginLoginFnc, ACCOUNT_SETTING_MODE, googleplusConnecter) {

	$scope.timestamp = new Date().getTime();
	
	//初期ビュー
	$scope.viewNo = "1";
	
	//google plusでのログインが可能かどうか
	if(googleplusConnecter.googleplusIsAvailable()){
		$scope.googlePlusBtnDisabled = false;
	}else{
		$scope.googlePlusBtnDisabled = true;
	}

	$scope.prop = {};
	$scope.prop.headerColor = "calm";

	$scope.getHeaderClass = function(){
		var cl =  ["bar-subheader"];
		cl.push("bar-"+$scope.prop.headerColor);
		return cl;
	}
	
	
	$scope.onLoginEntry=function(){
		$scope.viewNo="2";
	}

	$scope.onNewEntry=function(){
		$scope.viewNo="3";
	}

	$scope.onMallLogin=function(){
		$state.go('beauti-home-home-top',null,'');
	}

	///////////////////////////////
	//メールアドレスで新規登録
	$scope.onNewByEmail=function() {
		$state.go('beauti-setting-account_edit',{mode:ACCOUNT_SETTING_MODE.email},'');
	}

	///////////////////////////////
	//ログイン
	$scope.onLogin=function() {
		$state.go('beauti-home-home-top',null,'');
	}	
	
	///////////////////////////////
	//Face bookログイン
	$scope.onFacebookLogin=function() {
		miralLoginLoginFnc.facebookLogin();
	}

	///////////////////////////////
	//Twitterログイン
	$scope.onTwitterLogin=function() {
		twitterConnecter.twitterSignIn();
	}

	///////////////////////////////
	//GooglePlusログイン
	$scope.onGooglePlusLogin=function() {
		googleplusConnecter.googleplusSignIn();
	}
	
	///////////////////////////////
	//Instagramログイン
	$scope.onInstagramLogin=function() {
		$state.go('beauti-home-home-top',null,'');
		/*
		instagramConnecter.instagramSignIn(function(){
			//$state.go('beauti-home-home-top',null,'');			
		});
		*/
	}	
	
	
})

;
