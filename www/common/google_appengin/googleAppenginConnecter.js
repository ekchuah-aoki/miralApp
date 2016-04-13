angular.module('miral.common.googleAppenginConnecter', ['miral.common.config'])

.factory('googleAppenginConnecter', function(GOOGLE_APP_ENGIN) {
'use strict';


	var _signin = function(callback) {

		console.log('try signin!');	
		gapi.auth.authorize({client_id:GOOGLE_APP_ENGIN.WEB_CLIENT_ID, scope:GOOGLE_APP_ENGIN.SCOPE, immediate:true,function(){
		
			console.log('tauthorize!');
			
			
			if(callback){
				callback();
			}
			
			/*
			  var request =
			      gapi.client.oauth2.userinfo.get().execute(function(resp) {
			    if (!resp.code) {
			      // User is signed in, call my Endpoint
			    	console.log('saccess signin!');
			    }
			  });		
			*/
		}
		});
	}

	return {
		
		
		init:function() {
			// Loads the OAuth and miralServer APIs asynchronously, and triggers login
			// when they have completed.
			var apisToLoad;
			var callback = function() {
				if (--apisToLoad == 0) {
					_signin();
				}
			}

			apisToLoad = 1; // must match number of calls to gapi.client.load()
			gapi.client.load(GOOGLE_APP_ENGIN.APIName, GOOGLE_APP_ENGIN.APIVersion, callback, GOOGLE_APP_ENGIN.url);
		},

		execute:function(){
			
			var api = arguments[0];
			var success = arguments[1];
			var fail = arguments[2];
			var arg = [];
			if(arguments.length>3){
				arg = Array.prototype.slice.call(arguments, 3);
			}
			
			try {
				api.apply(null, arg).execute(
						function(resp){
							
							console.log('google app engin return code :' + resp.code);
							
							if(!resp.code){
								if(success){
									success(resp);
								}
							}
						});
			}catch(e){
				console.log('google app engin return fail :' + e);
				if(fail){
					fail();
				}
			}
			
		},
			
		test:function(f){
			gapi.client.miralServer.greetings.getGreeting({'id': 1}).execute(
					function(resp){
						if(!resp.code){
							console.debug(resp.message);
							
							if(f){
								f(resp.message);
							}
						}
					})
			
			return "";
		}
		
		
	}
}

)

;



