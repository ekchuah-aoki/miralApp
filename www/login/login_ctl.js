angular.module('miral.login.controllers', ['miral.login.login_fnc','miral.common.miralConst','miral.loginInfo'
                                           ,'miral.common.googleplus'
                                           ,'miral.common.twitter'])

.controller('loginControllers', function($scope, $state,  $ionicHistory, miralLoginLoginFnc, ACCOUNT_SETTING_MODE, LOGIN_STATE,loginInfo
		, googleplusConnecter,twitterConnecter ) {

	$scope.timestamp = new Date().getTime();
	
	///////////////////////////////
	//項目初期化
	
	//ログインクリア
	loginInfo.clearLoginInfo();
	
	$scope.viewNo = "1";
	
	$scope.loginEmail = "test@ekchuah.co.jp";
	$scope.loginPassword = "";
	
	
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
		$scope.viewNo="4";
	}

	///////////////////////////////
	//メールアドレスで新規登録
	$scope.onNewByEmail=function() {

		$ionicHistory.nextViewOptions({
			disableBack: true
		});		

		$state.go('beauti-setting-account_edit',{mode:ACCOUNT_SETTING_MODE.email},'');
	}

	///////////////////////////////
	//ログイン失敗
	var loginFailFnc = function(){
		alert('ログイン失敗');
	}

	///////////////////////////////
	//SNS ログイン成功
	var snsLoginSucess = function(loginState_){

		$ionicHistory.nextViewOptions({
			disableBack: true
		});		

		if(loginState_ == LOGIN_STATE.logined){
			$state.go('beauti-home-home-top',null,'');
		}else if(loginState_ == LOGIN_STATE.newAccount){
			
			$state.go('beauti-setting-account_edit',{mode:ACCOUNT_SETTING_MODE.sns},'');
		}
	}
	
	
	///////////////////////////////
	//メールログイン
	$scope.onMailLogin=function() {
		
		var sucess = function(loginState_){
			if(loginState_ == LOGIN_STATE.logined){
				
				$ionicHistory.nextViewOptions({
					disableBack: true
				});		
				$state.go('beauti-home-home-top',null,'');
			}else{
				alert('ログイン失敗');
			}
		}
		
		miralLoginLoginFnc.mailLogin($scope.loginEmail,$scope.loginPassword,sucess, loginFailFnc );
	}	
	
	///////////////////////////////
	//Face bookログイン
	$scope.onFacebookLogin=function() {
		miralLoginLoginFnc.facebookLogin(snsLoginSucess);
	}

	///////////////////////////////
	//Twitterログイン
	$scope.onTwitterLogin=function() {

		//twitterConnecter.twitterLogout();
		
		miralLoginLoginFnc.twitterLogin(snsLoginSucess);
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
