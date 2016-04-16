angular.module('miral.beauti.setting.license_edit_fnc', ['miral.common.account.service','miral.loginInfo'])

.factory('miralBeautiSettingLicenseEditFnc', function(miralCommonAccountService,loginInfo) {

	var myself = {
			registAccount:function(){
				var accInfo = miralCommonAccountService.restoreAccountInfo();
				
				//SNSの情報をlogin情報から取得して設定する
				secretInfo = loginInfo.getSecretInfo();
			    accInfo.facebookId = secretInfo.facebookId;
			    accInfo.twitterId = secretInfo.twitterId;
			    accInfo.googleplusId = secretInfo.googleplusId; 
			    accInfo.instagramId = secretInfo.instagramId;

				miralCommonAccountService.addAccount(accInfo);
			}
		
	};
	
	return myself;
})

;