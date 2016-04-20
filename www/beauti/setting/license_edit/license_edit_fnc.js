
angular.module('miral.beauti.setting.license_edit_fnc', ['miral.common.account.service','miral.loginInfo','miral.common.imageUtil'])

.factory('miralBeautiSettingLicenseEditFnc', function(miralCommonAccountService,loginInfo,miralCommonImageUtil) {

	var myself = {
			///////////////////////////////
			//ライセンスイメージ選択
			licenseImagPick:function(sucess_, fail_){
				miralCommonImageUtil.showImagPick(
						  function(result_) {
							  //var userInfo = loginInfo.getUserInfo();
							  
							  //miralCommonAccountService.saveLicenseImg(userInfo.userId, result);
							  //miralCommonAccountService.addLicenseImg(userInfo.accountId, result_[0], sucess_, fail_);
							  
							  if(sucess_){
								  sucess_(result_[0]);
							  }
						  },
						  fail_
						  
				);
				
			},
			
			//////////////////////////////////
			///ライセンスイメージ登録
			licenseRegist:function(imgData,sucess_, fail_){
				var userInfo = loginInfo.getUserInfo();	
				  miralCommonAccountService.addLicenseImg(userInfo.accountId, imgData, sucess_, fail_);
			}
	}
	
	return myself;
})

;