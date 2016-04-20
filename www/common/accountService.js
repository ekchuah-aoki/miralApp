

angular.module('miral.common.account.service', ['miral.common.miralConst'
                                                         ,'miral.common.googleAppenginConnecter'
                                                         ,'miral.common.miralUtil'
                                                         ])

.factory('miralCommonAccountService', function($localStorage, LOGIN_TYPE, googleAppenginConnecter) {
	

	var _convAccIn2Msg=function(accInfo){
		return {email:accInfo.email,				//email
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
			gender:accInfo.gender,					//性別
			birthday_y:accInfo.birthday_y,			//生年月日（年）
			birthday_m:accInfo.birthday_m,			//生年月日（月）
			birthday_d:accInfo.birthday_d			//生年月日（日）
		}
	};
	
	var myself = {
			
		/////////////////////////////////////
		//アカウント情報をDBから取得
		getAccount:function(loginTYpe_, id_, success_, fail_) {
			
			googleAppenginConnecter.execute(
					gapi.client.miralServer.common.accountservice.get,
					success_,
					fail_,
					{param:[String(loginTYpe_), String(id_)]}
					);
			
		},
		/////////////////////////////////////
		//アカウントDBに新規登録
		addAccount:function(accountInfo, success_, fail_){
			var msg = _convAccIn2Msg(accountInfo);
			
			console.log(JSON.stringify(msg));
			
			googleAppenginConnecter.execute(
					gapi.client.miralServer.common.accountservice.add,
					success_,
					fail_,
					msg
					);
			
		},
		/////////////////////////////////////
		//美容師免許画像をDBに新規登録
		addLicenseImg:function(accountId_, imgBase64data_, success_, fail_){

			var msg = {accountId:accountId_,
					imgbase64data:imgBase64data_};
			
			googleAppenginConnecter.execute(
					gapi.client.miralServer.beauti.licenseimgservice.add,
					success_,
					fail_,
					msg
					);
			
		}
	};
	
	return myself;
})

;

