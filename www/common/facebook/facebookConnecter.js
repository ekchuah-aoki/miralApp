angular.module('miral.common.facebook', ['mirroru.loginInfo'])

.factory('facebookConnecter', function(loginInfo) {
'use strict';

	var _fbLoginFail=function(){
		console.log('Facebook Login Fail!!')  
	},
	_fbLoginSuccess=function(response){
	  
		console.log('Facebook Loin Success!!!');
		  
		if(response.authResponse){
			//login error
			_fbLoginFail(); 
			return;
		}
		  
		var authResponse = response.authResponse;
		  
		_getFacebookProfileInfo(authResponse)
			.then(function(profileInfo){
				console.log('facebook userid = ', profileInfo.id);
				loginInfo.set(profileInfo.id);
			  
			}, function(fail){
				_fbLoginFail(); 
			});
	},
 
	_getFacebookProfileInfo=function(authResponse){
		var info = $q.defer();
	  
		facebookConnectPlugin.api('/me?fields=email,name&access_token=' + authResponse.accessToken, null,
			  
				function(respnse){
					console.log(response);
					info.resolve(response);
				},
				function(response){
					console.log(response);
					info.reject(response);
				}
		);
	  
		return info.promise;
	  
	};

	  return {
		  facebookSignIn:function(){

			  facebookConnectPlugin.login(['email', 'public_profile'], _fbLoginSuccess, _fbLoginFail);
			  
			  facebookConnectPlugin.getLoginStatus(function(success){
				  if(success.status === 'connected'){
					  consloe.log('loginStatus', success.status);
					  
					  _getFacebookProfileInfo(authResponse)
					  .then(function(profileInfo){
						  console.log('facebook userid = ', profileInfo.id);
						  loginInfo.set(profileInfo.id);
						  
					  }, function(fail){
						 _fbLoginFail(); 
					  });
					  
				  }else{
					  facebookConnectPlugin.login(['email', 'public_profile'], _fbLoginSuccess, _fbLoginFail);
				  }
			  
			  });
		  }
		  
		  
	  }
	  		
	  
})

;


