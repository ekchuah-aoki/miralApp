angular.module('miral.common.twitter', [])

.factory('twitterConnecter', function($window, $cordovaOauth, loginInfo) {
'use strict';

  return {
	  
	  twitterSignIn:function(succ_,fail_){
		  TwitterConnect.login(
				  function(result) {
				    console.log('Successful login!');
				    console.log(JSON.stringify(result));
				    console.log(succ_);
				    if(succ_){
				    	succ_(result);
				    }
				  }, function(error) {
				    console.log('Error logging in');
				    console.log(error);
				    if(fail_){
				    	fail_();
				    }
				  }
				);
		  
	  },
	  twitterLogout:function(succ_,fail_){
		  TwitterConnect.logout(
				  function() {
				    console.log('Successful logout!');
				    if(succ_){
				    	succ_();
				    }
				  },
				  function() {
				    console.log('Error logging out');
				    if(fail_){
				    	fail_();
				    }
				  }
				);			  
	  }
	  
  }
	  		
	  
})

;


