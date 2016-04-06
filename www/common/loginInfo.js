angular.module('mirroru.loginInfo', ['miral.common.miralUtil'])

.constant('userInfoConstVal',{
	type:{SALON:1, BEAUTI:2}
})

.factory('loginInfo', function(userInfoConstVal, $loalStorage) {

	return {
		set:function(userId_){
			var loginInfo = {
				userId:userId_
			};

			$loalStorage.setObject(loginInfo)
			
		},

		get:function(){
			
			return $loalStorage.getObject('_$loginuser');
		}
	};
})
;


