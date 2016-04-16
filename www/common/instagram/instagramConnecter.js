angular.module('miral.common.instagram', ['ngCordovaOauth'])

.factory('instagramConnecter', function($window, $cordovaOauth, loginInfo) {
'use strict';

	var _instaLoginFail=function(){
		console.log('Facebook Login Fail!!')  
	},
	_instaLoginSuccess=function(response){
	  
		console.log('Facebook Loin Success!!!');
		  
	},
	_setLoginUserInfo=function(profileInfo){
		 
	},
	_getInstagramProfileInfo=function(authResponse){
	};

	  return {
		  instagramSignIn:function(f){
			  $cordovaOauth.instagram('f52b56d7a43c4b5cb30ce98d2c1c2a42',['basic'],{'response_type':'token'}).then(function(result) {
				    console.log("Response Object -> " + JSON.stringify(result));
			  }, function(error) {
			      console.log("Error -> " + error);
			  });
		  }
		  
		  
	  }
	  		
	  
})

;


