angular.module('miral.common.googleplus', ['mirroru.loginInfo'])

.factory('googleplusConnecter', function($window, $cordovaOauth, loginInfo) {
'use strict';

	var _googleLoginFail=function(){
		console.log('Twitter Login Fail!!')  
	},
	_googleLoginSuccess=function(response){
	  
		console.log('Facebook Loin Success!!!');
		  
	},
	_setLoginUserInfo=function(profileInfo){
		
		 
	},
	_getGoogleProfileInfo=function(authResponse){
	};

	  return {
		  
		  googleplusIsAvailable:function(){
			  
			  if(!window.plugins){
				  return false;
			  }
			  
			  return window.plugins.googleplus.isAvailable();
		  },
		  
		  googleplusSignIn:function(succ,err){
			  
			  
			  
			  window.plugins.googleplus.login(
					    {
					    },
					    function (obj) {
					      alert(JSON.stringify(obj)); // do something useful instead of alerting
					    },
					    function (msg) {
					      alert('error: ' + msg);
					    }
					);			  
		  }
		  
	  }
	  		
	  
})

;


