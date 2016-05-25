angular.module('miral.salon.setting.account_edit_fnc', ['miral.loginInfo'
                                                        ,'miral.common.googleAppenginConnecter'
                                                        ,'miral.common.miralMap'
                                                        ,'miral.common.miralConst',
                                                        ,'miral.common.miralUtil'])

.factory('salonSettingAccountEditFnc', function(loginInfo,googleAppenginConnecter,miralMap, PREFECTURE
		,miralConstUtil, miralStrUtil, ACCOUNT_TYPE) {

	var myself = {

			_register:function(salonInfo_, success_, fail_){
				
			    var msg = {salon:salonInfo_}
				
				var success = function(resp){
			    	//ログイン状態にする
			    	loginInfo.setLoginInfo({
						accountId:resp.accountId,
						acType:ACCOUNT_TYPE.salon,
						kindId:resp.kindId,
						email:salonInfo_.email,
						name: salonInfo_.lastName + " " + salonInfo_.firstName,
						temporary:false
			    	});
			    	
			    	if(success_){
			    		success_(resp)
			    	}
			    }
			    
			    //アカウント登録
				googleAppenginConnecter.execute(
						gapi.client.miralServer.salon.salonservice.add,
						success,
						fail_,
						msg
				);
				
			},
	
			///////////////////////////////
			//アカウントをDBに登録
			registAccount:function(salonInfo_, success_, fail_){
				//住所をGEOコードに変換
				if( miralStrUtil.isEmpty(salonInfo_.prefecturesCd) || miralStrUtil.isEmpty(salonInfo_.streetAdd1) || miralStrUtil.isEmpty(salonInfo_.streetAdd2)){

					myself._register(salonInfo_, success_, fail_);
				}else{
				
					var addr = miralConstUtil.getPrefectureNameByCode(PREFECTURE, salonInfo_.prefecturesCd)
						+ salonInfo_.streetAdd1 + salonInfo_.streetAdd2;
					
					miralMap.geoCoder(addr, function(result_){
						salonInfo_.lat = result_.position.lat.toString();
						salonInfo_.lng = result_.position.lng.toString();
						
						myself._register(salonInfo_, success_, fail_);
						
						},function(){
							myself._register(salonInfo_, success_, fail_);
						});
				}
			}
			
	}
	
	return myself;
})

;