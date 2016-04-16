

angular.module('miral.common.account.service', ['miral.common.miralConst'
                                                         ,'miral.common.googleAppenginConnecter'
                                                         ,'miral.common.miralUtil'
                                                         ])

.factory('miralCommonAccountService', function($localStorage, LOGIN_TYPE, googleAppenginConnecter) {
	

	var _convAccIn2Msg=function(accInfo){
		return {email:accInfo.email,
		    acType: accInfo.acType,              
		    lastName: accInfo.lastName,       
		    firstName : accInfo.firstName,
		    lastNameKana : accInfo.lastNameKana,   
		    firstNameKana: accInfo.firstNameKana,            
		    prefecturesCd: accInfo.prefect,           
		    passWord: accInfo.pwd,
		    facebookId:accInfo.facebookId,
		    twitterId:accInfo.twitterId,
		    googleplusId:accInfo.googleplusId, 
		    instagramId:accInfo.instagramId,
			gender:accInfo.gender,
			birthday_y:accInfo.birthday_y,
			birthday_m:accInfo.birthday_m,
			birthday_d:accInfo.birthday_d
		    
		}
	};
	
	var myself = {
		saveAccountInfo:function(accInfo){
			$localStorage.setObject('__miralBeautiSettingAccountEditFnc_accountInfo', accInfo);
		},	
		
		restoreAccountInfo:function(){
			return $localStorage.getObject('__miralBeautiSettingAccountEditFnc_accountInfo');
		},
		removeAccountInfo:function(){
			return $localStorage.remove('__miralBeautiSettingAccountEditFnc_accountInfo');
			
		},
		getAccount:function(loginTYpe_, id_, success_, fail_) {
			
			googleAppenginConnecter.execute(
					gapi.client.miralServer.common.accountservice.get,
					success_,
					fail_,
					{param:[String(loginTYpe_), String(id_)]}
					);
			
		},
		addAccount:function(accountInfo){
			var msg = _convAccIn2Msg(accountInfo);
			
			console.log(JSON.stringify(msg));
			
			googleAppenginConnecter.execute(
					gapi.client.miralServer.common.accountservice.add,
					null,
					null,
					msg
					);
			
		}
	};
	
	return myself;
})

;

