angular.module('miral.login.login_fnc', ['miral.common.miralConst'
                                         ,'miral.common.googleAppenginConnecter'
                                         ,'miral.common.facebook'
                                         ,'miral.common.instagram'
                                         ,'miral.common.twitter'
                                         ,'miral.common.googleplus'
                                         ])

.factory('miralLoginLoginFnc', function(LOGIN_TYPE, googleAppenginConnecter,facebookConnecter,instagramConnecter,twitterConnecter,googleplusConnecter) {
	

	
	var myself = {
		getAccount:function(loginTYpe_, id_) {
			
			/*
			gapi.client.miralServer.common.accountservice.get({param:["1","2222222"]}).execute(
					function(resp){
						if(!resp.code){
							console.debug(resp.message);
							
							if(f){
								f(resp.message);
							}
						}
					})
			*/
		
			
			googleAppenginConnecter.execute(
					gapi.client.miralServer.common.accountservice.get,
					null,
					null,
					{param:[String(loginTYpe_), String(id_)]}
					);
			
		},
		
		facebookLogin:function(){
			facebookConnecter.facebookSignIn(function(profileInfo){
				myself.getAccount(LOGIN_TYPE.facebook, profileInfo.id)
			}
			);
			
		}
	};
	
	return myself;
})

;