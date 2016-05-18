angular.module('miral.salon.setting.account_edit_fnc', ['miral.loginInfo'])

.factory('salonSettingAccountEditFnc', function(miralCommonAccountService,loginInfo) {

	var myself = {
			///////////////////////////////
			//アカウントをDBに登録
			registAccount:function(accInfo){
				
				//SNSの情報をlogin情報から取得して設定する
				secretInfo = loginInfo.getSecretInfo();
			    accInfo.facebookId = secretInfo.facebookId;
			    accInfo.twitterId = secretInfo.twitterId;
			    accInfo.googleplusId = secretInfo.googleplusId; 
			    accInfo.instagramId = secretInfo.instagramId;

				miralCommonAccountService.addAccount(accInfo, function(resp){
					loginInfo.setLoginInfo({accountId:resp.accountId});
				});
			},
	}
	
	return myself;
})

;