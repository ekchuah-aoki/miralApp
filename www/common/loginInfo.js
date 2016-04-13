angular.module('mirroru.loginInfo', ['miral.common.miralUtil','miral.common.miralConst'])


.factory('loginInfo', function($localStorage, LOGIN_TYPE) {

	return {
		setUserInfo:function(userId_,userName_, email_, loginType_){
			var loginInfo = {
				userId:userId_,
				userName:userName_,
				email:email_,
				loginType:loginType_
			};
/*
			switch(loginType_){
			case LOGIN_TYPE.facebook:
				loginInfo['facebookId']=
			}
*/			
			$localStorage.setObject('_$loginuser', loginInfo)
			
		},

		getUserInfo:function(){
			return $localStorage.getObject('_$loginuser');
		}
	};
})
;


