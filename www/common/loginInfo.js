angular.module('miral.loginInfo', ['miral.common.miralUtil','miral.common.miralConst'
                                   ,'miral.common.facebook'
                                   ,'miral.common.twitter'
                                   ,'ngStorage'])

////////////////////////////////////////////
//ログイン情報
.factory('loginInfo', function($localStorage, LOGIN_TYPE,$localStorage,facebookConnecter,twitterConnecter) {

	
	var myself = 
	{
		
		/////////////////////////////
		//ログイン情報をクリア
		clearLoginInfo:function(success_){
			
			//SNSもログアウト
			var userInfo = myself.getUserInfo();
			
			if(userInfo.loginType == LOGIN_TYPE.facebook){
				facebookConnecter.facebookSignOut(function(){
					delete $localStorage.loginuser;
					success_();
				});
			}else if(userInfo.loginType == LOGIN_TYPE.twitter){
				twitterConnecter.twitterLogout(function(){
					delete $localStorage.loginuser;
					success_();
				});	
			}
			
		},
		
		
		/////////////////////////////
		//ログイン中か確認
		isLogined:function(){
			if(myself.getUserInfo().accountId){
				return true;
			}
			
			return false;
		},
		
		
		/////////////////////////////
		//ログイン情報の設定
		//基本情報はlocalstrageに保存
		setLoginInfo:function(props_){
			
			_loginInfo = myself.getUserInfo();
			
			for(var n in props_){
				if(_loginInfo[n]!=undefined){
					_loginInfo[n] = props_[n];
				}
			}

			$localStorage.loginuser = _loginInfo;
			
		},

		
		/////////////////////////////
		//ログイン基本情報の取得
		getUserInfo:function(){
			
			var usrinf = $localStorage.loginuser;
			
			return usrinf || {
					accountId:"",  //アカウントId
					acType:"",    //アカウントタイプ（美容師・サロン）
					kindId:"",     //美容師の場合は美容師KindのId、サロンの場合はサロンのKindのId 
					email:"",
					name:"",
					loginType:"",
					twitterId:"",
					twitterToken:"",
					facebookId:"",
					temporary:true	
				};
		},

	};
	
	return myself;
})
;


