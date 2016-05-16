angular.module('miral.login.login_fnc', ['miral.common.miralConst'
                                         ,'miral.common.googleAppenginConnecter'
                                         ,'miral.common.facebook'
                                         ,'miral.common.instagram'
                                         ,'miral.common.twitter'
                                         ,'miral.common.googleplus'
                                         ,'miral.loginInfo'
                                         ,'miral.common.miralUtil'
                                         ])

                                         
.factory('miralLoginLoginFnc', function(LOGIN_TYPE,UMU_FLG,LOGIN_STATE,loginInfo,$localStorage
		, googleAppenginConnecter,facebookConnecter,instagramConnecter,twitterConnecter,googleplusConnecter) {

	///////////////////////////////////////////
	//DBからアカウント情報を取得
	var _getMiralAccount=function(loginType_, id_, success_, fail_){
				//success
		var success = function(resp){
			
					var loginState;

					loginInfo.setLoginInfo({loginType_});

					if(resp.res.rstCode==UMU_FLG.ari){
						//アカウント情報ありの場合、アカウント情報からログイン情報を生成
						
						var account = resp.account;
						
						loginInfo.setLoginInfo({
							accountId:account.accountId,
							email:account.email,
							name: account.lastName + " " + account.firstName
						});
						
						console.log('アカウント登録済み');
						sloginState = LOGIN_STATE.logined;
					}else{
						//アカウント情報なし
						console.log('アカウント未登録');
						sloginState = LOGIN_STATE.newAccount;
					}
					if(success_){
						success_(sloginState);
					}
		};
		
		//fail
		var fail = function(){
					console.log('アカウント情報取得失敗');
					if(fail_){
						fail_();
					}
		};
		
		googleAppenginConnecter.execute(
				gapi.client.miralServer.common.accountservice.get,
				success,
				fail,
				{loginType:loginType_, id:id_}
				);
		
		
	};
	
	
	var myself = {
		
		////////////////////////////////////////////////
		//メールアカウントでログイン
		mailLogin:function(email_, passwd_, success_, fail_){
			_getMiralAccount(LOGIN_TYPE.miralAccount, email_,success_, fail_); 
		},
		
		////////////////////////////////////////////////
		//Facebookでログイン
		facebookLogin:function(success_, fail_){
			facebookConnecter.facebookSignIn(
					function(profileInfo){
						
						console.log('facebook ログイン成功')
						
						//facebookで
						loginInfo.setLoginInfo({loginType:LOGIN_TYPE.facebook,
							facebookId:profileInfo.id});
						
						_getMiralAccount(LOGIN_TYPE.facebook, profileInfo.id, 
								function(loginState_){
							
									//SNSの情報でアカウント初期表示データをセット
									if(loginState_ == LOGIN_STATE.newAccount){
										names = profileInfo.name.split(' ');
										var accInfo = {
												email:profileInfo.email,
												lastName:names[1],
												firstName:names[0]
										};
										myself.saveAccountInfo(accInfo);
										
									}
									success_(loginState_);
							
								},fail_
						);
					},
					function(){
						console.log('facebook ログイン失敗')
						if(fail_){
							fail_();
						}
					});
			
		},
		////////////////////////////////////////////////
		//Twitterでログイン
		twitterLogin:function(success_, fail_){
			twitterConnecter.twitterSignIn(
					function(profileInfo){
						loginInfo.setLoginInfo({loginType:LOGIN_TYPE.twitter,
							twitterId:profileInfo.userId,
							twitterToken:profileInfo.token});

						
						_getMiralAccount(LOGIN_TYPE.twitter, profileInfo.id, 
								function(loginState_){
							
									//Twitterの場合、アカウントの初期データにする項目がないので、クリア
									if(loginState_ == LOGIN_STATE.newAccount){
										
										myself.removeAccountInfo();
										
									}
									success_(loginState_);
							
								},fail_
						);
						
					}
			);
		},
		/////////////////////////////////////
		//アカウント情報をlocalStrageに保存
		saveAccountInfo:function(accInfo){
			$localStorage.setObject('__miralLoginLoginFnc_accountInfo', accInfo);
		},	
		
		/////////////////////////////////////
		//アカウント情報をlocalStrageから取得
		restoreAccountInfo:function(){
			return $localStorage.getObject('__miralLoginLoginFnc_accountInfo');
		},
		/////////////////////////////////////
		//アカウント情報をlocalStrageから消去
		removeAccountInfo:function(){
			return $localStorage.remove('__miralLoginLoginFnc_accountInfo');
			
		},
		
	};
	
	return myself;
})

;


