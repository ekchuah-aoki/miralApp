angular.module('miral.loginInfo', ['miral.common.miralUtil','miral.common.miralConst'])

////////////////////////////////////////////
//ログイン情報
.factory('loginInfo', function($localStorage, LOGIN_TYPE) {

	//ログイン基本情報
	var _loginInfo ={
		accountId:"",  //アカウントId
		kindId:"",     //美容師の場合は美容師KindのId、サロンの場合はサロンのKindのId 
		email:"",
		name:"",
		loginType:"",
		temporary:true	
	};
	
	
	var myself = 
	{
		
		/////////////////////////////
		//ログイン情報をクリア
		clearLoginInfo:function(){
			$localStorage.remove('__$loginuser')
		},
		
		
		/////////////////////////////
		//ログイン中か確認
		isLogined:function(){
			if(mysekf.getUserInfo()){
				return true;
			}
			
			return false;
		},
		
		
		/////////////////////////////
		//ログイン情報の設定
		//基本情報はlocalstrageに保存
		setLoginInfo:function(props_){
			
			for(var n in props_){
				if(_loginInfo[n]!=undefined){
					_loginInfo[n] = props_[n];
				}
			}

			$localStorage.setObject('__$loginuser', _loginInfo)
			
		},

		
		/////////////////////////////
		//ログイン基本情報の取得
		getUserInfo:function(){
			return $localStorage.getObject('__$loginuser');
		},

	};
	
	return myself;
})
;


