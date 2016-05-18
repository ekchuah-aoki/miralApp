
angular.module('miral.beauti.setting.license_edit_fnc', ['miral.loginInfo','miral.common.imageUtil','miral.common.googleAppenginConnecter'
                                                         ,'miral.common.miralConst'])

.factory('miralBeautiSettingLicenseEditFnc', function(loginInfo,miralCommonImageUtil,googleAppenginConnecter,UMU_FLG) {

	var myself = {
			
			///////////////////////////////
			//ライセンスイメージの取得
			getLicenseImg:function(success_,fail_){
				var userInfo = loginInfo.getUserInfo();	

				var msg = {beautiId:userInfo.kindId};
				
				var success = function(resMsg){
					
					if( resMsg.res.rstCode == UMU_FLG.ari){
						success_(resMsg.imgbase64data)
					}
					
				}
				
				googleAppenginConnecter.execute(
						gapi.client.miralServer.beauti.licenseservice.getthumbnailimage,
						success,
						fail_,
						msg
						);
				
			},
			
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
			licenseRegist:function(imgData_,success_, fail_){
				var userInfo = loginInfo.getUserInfo();	

				var msg = {beautiId:userInfo.kindId,
						imgbase64data:imgData_};
				
				googleAppenginConnecter.execute(
						gapi.client.miralServer.beauti.licenseservice.set,
						success_,
						fail_,
						msg
						);
			}
	}
	
	return myself;
})

;