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

			_modify:function(salonInfo_, success_, fail_){
				
			    var msg = {salon:salonInfo_}
				
				var success = function(resp){
			    	//ログイン状態を変更する
			    	loginInfo.setLoginInfo({
						email:salonInfo_.email,
						name: salonInfo_.lastName + " " + salonInfo_.firstName
			    	});
			    	
			    	if(success_){
			    		success_(resp)
			    	}
			    }
			    
			    //アカウント修正
				googleAppenginConnecter.execute(
						gapi.client.miralServer.salon.salonservice.modify,
						success,
						fail_,
						msg
				);
				
			},
			
			///////////////////////////////
			//アカウントをDBに登録
			registAccount:function(salonInfo_, success_, fail_){
				//住所をGEOコードに変換
				if( miralStrUtil.isEmpty(salonInfo_.prefecturesCd2) || miralStrUtil.isEmpty(salonInfo_.streetAdd1) || miralStrUtil.isEmpty(salonInfo_.streetAdd2)){

					myself._register(salonInfo_, success_, fail_);
				}else{
				
					var addr = miralConstUtil.getPrefectureNameByCode(PREFECTURE, salonInfo_.prefecturesCd2)
						+ salonInfo_.streetAdd1 + salonInfo_.streetAdd2;
					
					miralMap.geoCoder(addr, function(result_){
						salonInfo_.lat = result_.position.lat.toString();
						salonInfo_.lng = result_.position.lng.toString();
						
						myself._register(salonInfo_, success_, fail_);
						
						},function(){
							myself._register(salonInfo_, success_, fail_);
						});
				}
			},

			///////////////////////////////
			//アカウントを修正登録
			modifyAccount:function(salonInfo_, success_, fail_){
				//住所をGEOコードに変換
				if( miralStrUtil.isEmpty(salonInfo_.prefecturesCd2) || miralStrUtil.isEmpty(salonInfo_.streetAdd1) || miralStrUtil.isEmpty(salonInfo_.streetAdd2)){

					myself._modify(salonInfo_, success_, fail_);
				}else{
				
					var addr = miralConstUtil.getPrefectureNameByCode(PREFECTURE, salonInfo_.prefecturesCd2)
						+ salonInfo_.streetAdd1 + salonInfo_.streetAdd2;
					
					miralMap.geoCoder(addr, function(result_){
						salonInfo_.lat = result_.position.lat.toString();
						salonInfo_.lng = result_.position.lng.toString();
						
						myself._modify(salonInfo_, success_, fail_);
						
						},function(){
							myself._modify(salonInfo_, success_, fail_);
						});
				}
			},
			
			//アカウント情報取得
			getAccount:function(accId_, success_, fail_){
				
				console.debug("getAccount id:"+accId_)
				
				var success = function(res){
					
					var accInfo = {};
					
					accInfo.email=res.salon.email;
					accInfo.lastName= res.salon.lastName;       
					accInfo.firstName= res.salon.firstName;
					accInfo.lastNameKana= res.salon.lastNameKana;   
					accInfo.firstNameKana= res.salon.firstNameKana;            
					accInfo.prefect1= res.salon.prefecturesCd1;           

					accInfo.name = res.salon.name                                //店舗名カナ
					accInfo.nameKana = res.salon.nameKana                        //店舗名カナ
					accInfo.prefect2 = res.salon.prefecturesCd2                   //店舗所在地都道府県
					accInfo.streetAdd1 =res.salon.streetAdd1                     //店舗所在地住所１
					accInfo.streetAdd2 = res.salon.streetAdd2                    //店舗所在地住所２
			        //salonMsg.lat = salonKnd.geoCd.lat                            //店舗所在地緯度
			        //salonMsg.lng = salonKnd.geoCd.lng                            //店舗所在地軽度
					accInfo.stationCd = res.salon.stationCd                      //最寄り駅
					accInfo.workingTime = res.salon.workingTime                  //駅徒歩
					accInfo.oneHourPoint = res.salon.oneHourPoint                //１時間利用ポイント
					accInfo.oneDayPoint = res.salon.oneDayPoint                  //１日利用ポイント
					accInfo.conditions = res.salon.conditions                    //利用条件
					accInfo.cancelPer = res.salon.cancelPer                      //キャンセル割合
					accInfo.holiday = res.salon.holiday                          //定休日
					accInfo.hpUrl = res.salon.hpUrl                              //HP URL
					accInfo.openTime = res.salon.openTime                        //営業時間開始
					accInfo.closeTime = res.salon.closeTime                      //営業時間終了
					accInfo.mirrorCnt = res.salon.mirrorCnt                      //利用可能席数
					
					success_(accInfo);
				}
				
				var reqMsg = {accountId:accId_};
				
				googleAppenginConnecter.execute(
						gapi.client.miralServer.salon.salonservice.getaccount4edit,
						success,
						fail_,
						reqMsg
						);
				
			}
			
	}
	
	return myself;
})

;