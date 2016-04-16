angular.module('miral.loginInfo', ['miral.common.miralUtil','miral.common.miralConst'])


.factory('loginInfo', function($localStorage, LOGIN_TYPE) {

	var _loginInfo ={
		userId:"",
		email:"",
		name:"",
		loginType:""
			
	},
	
	_secretLoginInfo ={
		facebookId:"",
		facebookToken:"",
		twitterId:"",
		twitterToken:"",
		googleplusId:"",
		googleplusToken:"",
		instagramId:"",
		instagramToken:""
	}
	;
	
	var myself = 
	{
		
		clearLoginInfo:function(){
			$localStorage.remove('__$loginuser')
		},
		
		isLogined:function(){
			if(mysekf.getUserInfo()){
				return true;
			}
			
			return false;
		},
		
		setLoginInfo:function(props_){
			
			for(var n in props_){
				if(_loginInfo[n]!=undefined){
					_loginInfo[n] = props_[n];
				}else if(!_secretLoginInfo[n]){
					_secretLoginInfo[n] = props_[n];
				}
			}

			$localStorage.setObject('__$loginuser', _loginInfo)
			
		},

		getUserInfo:function(){
			return $localStorage.getObject('__$loginuser');
		},
		getSecretInfo:function(){
			return _secretLoginInfo;
		}
	};
	
	return myself;
})
;


