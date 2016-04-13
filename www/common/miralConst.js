angular.module('miral.common.miralConst', [])
//ログインモード
.constant('LOGIN_TYPE', {
	facebook:1,
	instagram:2,
	twitter:3,
	googleplus:4,
	miralAccount:9
})
//アカウント設定モード
.constant('ACCOUNT_SETTING_MODE', {
	sns:1,
	email:2
})

;


