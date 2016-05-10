angular.module('miral.beauti.setting.account_edit_fnc', ['miral.common.googleAppenginConnecter','miral.loginInfo'])

.factory('miralBeautiSettingAccountEditFnc', function(googleAppenginConnecter, loginInfo) {

	var myself = {
			///////////////////////////////
			//アカウントをDBに登録
			registAccount:function(accInfo, success_, fail_){
				
				//SNSの情報をlogin情報から取得して設定する
				secretInfo = loginInfo.getSecretInfo();
			    accInfo.facebookId = secretInfo.facebookId;
			    accInfo.twitterId = secretInfo.twitterId;
			    accInfo.googleplusId = secretInfo.googleplusId; 
			    accInfo.instagramId = secretInfo.instagramId;

			    //入力値をメッセージに設定
			    var msg = {account:null, beautician:null}
				
			    msg.account = {email:accInfo.email,				//email
					    acType: accInfo.acType,              	//アカウントタイプ(美容師、サロン）
					    lastName: accInfo.lastName,       		//氏名（苗字）
					    firstName : accInfo.firstName,			//氏名（名前）
					    lastNameKana : accInfo.lastNameKana,   	//氏名カナ（苗字）
					    firstNameKana: accInfo.firstNameKana,	//氏名カナ（名前）            	
					    prefecturesCd: accInfo.prefect,         //都道府県  	
					    passWord: accInfo.pwd,					//パスワード
					    facebookId:accInfo.facebookId,			//facebookのId
					    twitterId:accInfo.twitterId,			//twitterのId
					    googleplusId:accInfo.googleplusId, 		//googleplusのId
					    instagramId:accInfo.instagramId,		//インスタグラムのId
				};
				
			    msg.beautician = {
			    		gender:accInfo.gender,					//性別
			    		birthday_y:accInfo.birthday_y,			//生年月日（年）
			    		birthday_m:accInfo.birthday_m,			//生年月日（月）
			    		birthday_d:accInfo.birthday_d			//生年月日（日）
			    		
			    };

		
			    var success = function(resp){
			    	loginInfo.setLoginInfo({accountId:resp.kindId});
			    	if(success_){
			    		success_(resp)
			    	}
			    }
			    
			    //美容師アカウント登録
				googleAppenginConnecter.execute(
						gapi.client.miralServer.beauti.beauticianservice.add,
						success,
						fail_,
						msg
						);
			},
	
	}
	
	return myself;
})

;