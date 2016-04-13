angular.module('miral.common.twitter', ['mirroru.loginInfo'])

.factory('twitterConnecter', function($window, $cordovaOauth, loginInfo) {
'use strict';

	var _twitterLoginFail=function(){
		console.log('Twitter Login Fail!!')  
	},
	_twitterLoginSuccess=function(response){
	  
		console.log('Facebook Loin Success!!!');
		  
	},
	_setLoginUserInfo=function(profileInfo){
		
		 
	},
	_getTwitterProfileInfo=function(authResponse){
	};

	  return {
		  
		  twitterSignIn:function(succ,err){
			  TwitterConnect.login(
					  function(result) {
					    console.log('Successful login!');
					    console.log(JSON.stringify(result));
					    _setLoginUserInfo();
					    if(succ){
					    	succ();
					    }
					  }, function(error) {
					    console.log('Error logging in');
					    console.log(error);
					    if(err){
					    	err();
					    }
					  }
					);
			  
		  }
		  
	  }
	  		
	  
})

;


