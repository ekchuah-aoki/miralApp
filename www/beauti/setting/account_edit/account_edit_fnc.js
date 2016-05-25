angular.module('miral.beauti.setting.account_edit_fnc', ['miral.common.googleAppenginConnecter','miral.loginInfo'])

.factory('miralBeautiSettingAccountEditFnc', function(googleAppenginConnecter, loginInfo) {

	var myself = {
			///////////////////////////////
			//アカウントをDBに登録
			registAccount:function(beautiInfo_, success_, fail_){
				

			    //入力値をメッセージに設定
			    var msg = {beautician:null}
				
			    msg.beautician = {email:beautiInfo_.email,				//email
					    lastName: beautiInfo_.lastName,       		//氏名（苗字）
					    firstName : beautiInfo_.firstName,			//氏名（名前）
					    lastNameKana : beautiInfo_.lastNameKana,   	//氏名カナ（苗字）
					    firstNameKana: beautiInfo_.firstNameKana,	//氏名カナ（名前）            	
					    prefecturesCd: beautiInfo_.prefect,         //都道府県  	
					    passWord: beautiInfo_.pwd,					//パスワード

					    gender:beautiInfo_.gender,					//性別
			    		birthday_y:beautiInfo_.birthday_y,			//生年月日（年）
			    		birthday_m:beautiInfo_.birthday_m,			//生年月日（月）
			    		birthday_d:beautiInfo_.birthday_d			//生年月日（日）
			    		
			    };

		
			    var success = function(resp){
			    	
			    	
			    	//ログイン状態にする
			    	loginInfo.setLoginInfo({
						accountId:resp.accountId,
						acType:ACCOUNT_TYPE.salon,
						kindId:resp.kindId,
						email:beautiInfo_.email,
						name: beautiInfo_.lastName + " " + beautiInfo_.firstName,
						temporary:false
						
			    	});
			    	
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
			///////////////////////////////
			//アカウント情報の変更
			modifyAccount:function(accInfo_, success_, fail_){
				
				console.log('modifyAccount')
				
				console.debug('lastNameKana:'+accInfo_.lastNameKana);
				console.debug('firstNameKana:'+accInfo_.firstNameKana);
			    //入力値をメッセージに設定
			    var msg = {accountId:accInfo_.accountId, beauti:null}
				
			    msg.beauti = {email:accInfo_.email,				//email
					    lastName: accInfo_.lastName,       		//氏名（苗字）
					    firstName : accInfo_.firstName,			//氏名（名前）
					    lastNameKana : accInfo_.lastNameKana,   	//氏名カナ（苗字）
					    firstNameKana: accInfo_.firstNameKana,	//氏名カナ（名前）            	
					    prefecturesCd: accInfo_.prefect,         //都道府県  	
			    		gender:accInfo_.gender,					//性別
			    		birthday_y:accInfo_.birthday_y,			//生年月日（年）
			    		birthday_m:accInfo_.birthday_m,			//生年月日（月）
			    		birthday_d:accInfo_.birthday_d			//生年月日（日）
				};

			    if( accInfo_.pwd ){
			    	msg.beauti.passWord =accInfo_.pwd;					//パスワード
			    }
		
			    var success = function(resp){
			    	if(success_){
			    		success_(resp)
			    	}
			    }
			    
			    //美容師アカウント登録
				googleAppenginConnecter.execute(
						gapi.client.miralServer.beauti.beauticianservice.modify,
						success,
						fail_,
						msg
						);
			},
			getAccount:function(accId_, success_, fail_){
				
				console.debug("getAccount id:"+accId_)
				
				var success = function(res){
					
					var accInfo = {};
					
					accInfo.email=res.beauti.email;
					accInfo.acType = 
					accInfo.lastName= res.beauti.lastName;       
					accInfo.firstName= res.beauti.firstName;
					accInfo.lastNameKana= res.beauti.lastNameKana;   
					accInfo.firstNameKana= res.beauti.firstNameKana;            
					accInfo.prefect= res.beauti.prefecturesCd;           
					accInfo.gender=res.beauti.gender;
					accInfo.birthday_y=res.beauti.birthday_y;
					accInfo.birthday_m=res.beauti.birthday_m;
					accInfo.birthday_d=res.beauti.birthday_d;
					
					success_(accInfo);
				}
				
				var reqMsg = {accountId:accId_};
				
				googleAppenginConnecter.execute(
						gapi.client.miralServer.beauti.beauticianservice.getacc4edit,
						success,
						fail_,
						reqMsg
						);
				
			}
	
	}
	
	return myself;
})

;