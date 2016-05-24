angular.module('miral.login.controllers', ['miral.login.login_fnc','miral.common.miralConst','miral.loginInfo'
                                           ,'miral.common.googleplus'
                                           ,'miral.common.twitter'])

.controller('loginControllers', function($scope, $state,  $ionicHistory, miralLoginLoginFnc, ACCOUNT_SETTING_MODE, LOGIN_STATE,ACCOUNT_TYPE, loginInfo
		, googleplusConnecter,twitterConnecter ) {

	$scope.timestamp = new Date().getTime();
	
	///////////////////////////////
	//項目初期化
	
	
	//ログインクリア
	loginInfo.clearLoginInfo();
	
	$scope.viewNo = "1";
	
	$scope.form={};
	$scope.form.loginEmail = "test@ekchuah.co.jp";
	$scope.form.loginPassword = "";
	
	
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

		$state.go('beauti-setting-account_edit',{mode:ACCOUNT_SETTING_MODE.add},'');
	}

	///////////////////////////////
	//ログイン失敗
	var loginFailFnc = function(){
		alert('ログイン失敗');
	}

	///////////////////////////////
	//SNS ログイン成功
	var snsLoginSucess = function(loginState_){

		console.log('loginState_:'+loginState_);

		$ionicHistory.nextViewOptions({
			disableBack: true
		});		

		if(loginState_ == LOGIN_STATE.logined){
			$state.go('beauti-home-home-top',null,'');
			console.debug('go home');
		}else{
			$state.go('beauti-setting-account_edit',{mode:ACCOUNT_SETTING_MODE.modify},'');
			console.debug('go beauti-setting-account_edit');
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
				
				//美容師・サロンアカウントによって、遷移先決定
				userInfo = loginInfo.getUserInfo();
				
				if (userInfo.acType == ACCOUNT_TYPE.salon){
					console.log('サロン　アカウントでログイン');
					$state.go('salon-home-home_top',null,'');
				}else{
					var scope = angular.element(document.getElementById('miralNaviBer')).scope();
					scope.$apply(function(){
						scope.changeNaviBar();
					});
					console.log('美容師　アカウントでログイン');
					$state.go('beauti-home-home-top',null,'');
				}
			}else{
				alert('ログイン失敗');
			}
		}
		
		miralLoginLoginFnc.mailLogin($scope.form.loginEmail,$scope.form.loginPassword,sucess, loginFailFnc );
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
	
	///////////////////////////////
	//サロン新規作成
	$scope.onNewForSalon=function() {
		$state.go('salon-setting-account_edit',{mode:ACCOUNT_SETTING_MODE.add},'');
	}
})

;
