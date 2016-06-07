angular.module('miral.salon.setting.gallery_edit_fnc', ['miral.loginInfo'
                                                        ,'miral.common.googleAppenginConnecter'
                                                        ,'miral.common.miralConst'
                                                        ,'miral.loginInfo'
                                                        ,'miral.common.miralUtil'])

.factory('salonSettingGalleryEditFnc', function(loginInfo,googleAppenginConnecter
		,miralConstUtil, miralStrUtil, loginInfo, ACCOUNT_TYPE) {

	var myself = {

			add:function(imageDataList_, success_, fail_){
				
				var userInfo = loginInfo.getUserInfo(); 
				
				var count = 0;
				
			    var msg = {salonId:userInfo.kindId, imgbase64data:null}
				
				var success = function(resp){
			    	
			    	if(success_){
			    		success_(resp)
			    	}
			    	
			    	count++;
			    	if(count >= imageDataList_.length){
				    	return;
			    	}
			    	console.debug('画像登録 '+ (count+1) + '枚目');
			    	
				    msg.imgbase64data =imageDataList_[count]; 
					googleAppenginConnecter.execute(
							gapi.client.miralServer.salon.salongalleryservice.add,
							success,
							fail_,
							msg
					);
			    	
			    	
			    }
			    
			    //画像登録
		    	console.debug('画像登録 '+ (count+1) + '枚目');
			    msg.imgbase64data =imageDataList_[count]; 
				googleAppenginConnecter.execute(
						gapi.client.miralServer.salon.salongalleryservice.add,
						success,
						fail_,
						msg
				);
				
			},

			
	}
	
	return myself;
})

;