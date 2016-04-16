angular.module('miral.common.facebook', [])

.factory('facebookConnecter', function($q, loginInfo) {
'use strict';

	var _getFacebookProfileInfo=function(authResponse){
		var info = $q.defer();
	  
		facebookConnectPlugin.api('/me?fields=email,name&access_token=' + authResponse.accessToken, ["public_profile"],
			  
				function(response){
					info.resolve(response);
				},
				function(response){
					info.reject(response);
				}
		);
	  
		return info.promise;
	  
	};

	  return {
		  facebookSignIn:function(success_, fail_){

			  facebookConnectPlugin.getLoginStatus(function(status_success){
				  

				  if(status_success.status === 'connected'){

					  
					  console.log('Facebook connected');
					  
					  _getFacebookProfileInfo(status_success.authResponse)
					  .then(function(profileInfo){
							console.log(JSON.stringify(profileInfo));
						  success_(profileInfo);
					  }, function(){
						  fail_(); 
					  });
					  
				  }else{
					  facebookConnectPlugin.login(['email', 'public_profile'], function(response){
							if(response.authResponse){
								//login error
								fail_(); 
								return;
							}
							  
							var authResponse = response.authResponse;
							  
							_getFacebookProfileInfo(authResponse)
								.then(function(profileInfo){
									console.log(JSON.stringify(profileInfo));
									success_(profileInfo);
								}, function(){
									fail_(); 
								});
							
							
							console.log('Facebook Loin Success!!!');
							
							success()
							
					  }, function(){
							console.log('Facebook Login Fail!!')  
					  });
				  }
			  
			  });
		  },
		  facebookSignOut:function(success_, fail_){
			  facebookConnectPlugin.logout(function(){
				  console.log('Facebook Loginout')
				  success_();
			  },
			  function(fail){
				  console.log('Facebook Logout Fail!!') 
				  fail_();
			  });
		  }
		  
		  
	  }
	  		
	  
})

;


