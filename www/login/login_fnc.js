angular.module('miral.login.login_fnc', ['miral.common.miralConst'
                                         ,'miral.common.googleAppenginConnecter'
                                         ,'miral.common.facebook'
                                         ,'miral.common.instagram'
                                         ,'miral.common.twitter'
                                         ,'miral.common.googleplus'
                                         ,'miral.loginInfo'
                                         ,'miral.common.miralUtil'
                                         ])

                                         
.factory('miralLoginLoginFnc', function(LOGIN_TYPE,UMU_FLG,LOGIN_STATE,ACCOUNT_TYPE,loginInfo,$localStorage
		, googleAppenginConnecter,facebookConnecter,instagramConnecter,twitterConnecter,googleplusConnecter) {

	///////////////////////////////////////////
	//DBからアカウント情報を取得し、ログイン情報設定
	var _getMiralAccount=function(loginType_, id_, success_, fail_){
				//success
		var success = function(resp){
			
					var loginState;

					loginInfo.setLoginInfo({loginType:loginType_});

					if(resp.res.rstCode==UMU_FLG.ari){
						
						//アカウント情報ありの場合、アカウント情報からログイン情報を生成
						
						var account = resp.account;
						
						loginInfo.setLoginInfo({
							accountId:account.accountId,
							acType:account.acType,
							kindId:account.kindId,
							email:account.email,
							name: account.lastName + " " + account.firstName,
							temporary:account.temporary
						});

						console.log('アカウントタイプ'+account.acType);
						if( account.temporary){
							sloginState = LOGIN_STATE.temporary;
							console.log('アカウント登録済み　仮登録ログインイン');
							
						}else{
							//TODO:でバック
							//sloginState = LOGIN_STATE.temporary;
							sloginState = LOGIN_STATE.logined;
							console.log('アカウント登録済み　ログインイン');
						}
						
						console.log('accountId:'+account.accountId+"  kindId:"+account.kindId);
						
						
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
	
	//////////////////////////////////
	//SNS経由ログイン時のアカウント仮登録処理
	var _temporarilyRegist=function(accInfo_, success_, fail_){
		var msg = {account:null}
	    msg  = {email:accInfo_.email,						//email
			    acType: accInfo_.acType,              		//アカウントタイプ(美容師、サロン）
			    lastName: accInfo_.lastName,       			//氏名（苗字）
			    firstName : accInfo_.firstName				//氏名（名前）
		};

		if(accInfo_.facebookId){
			 msg.facebookId=accInfo_.facebookId;		//facebookのId
		}
		
		if(accInfo_.twitterId){
			 msg.twitterId=accInfo_.twitterId;			//twitterのId
		}

		//一時保存がログイン情報に設定
		var success = function(resMsg_){
			loginInfo.setLoginInfo({
				accountId:resMsg_.accountId,
				acType:accInfo_.acType,
				email:accInfo_.email,
				name: accInfo_.lastName + " " + accInfo_.firstName,
				kindId:resMsg_.kindId,
				temporary:true
			});
			success_();
		} 
		
		googleAppenginConnecter.execute(
				gapi.client.miralServer.beauti.beauticianservice.addtemp,
				success,
				fail_,
				msg
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
							
									//SNSの情報でアカウントの仮登録処理をする
									if(loginState_ == LOGIN_STATE.newAccount){
										
										//アカウントを仮登録する
										names = profileInfo.name.split(' ');
										var accInfo = {
												email:profileInfo.email,
												lastName:names[1],
												firstName:names[0],
												facebookId:profileInfo.id,
												acType:ACCOUNT_TYPE.beauti
										};
										_temporarilyRegist(accInfo, 
												function(){
													success_(loginState_);
												},
												fail_
										);
										
									}else{
										success_(loginState_);
									}
									
							
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


