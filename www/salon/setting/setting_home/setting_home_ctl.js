angular.module('miral.salon.setting.setting_home.controllers', ['miral.loginInfo'])

.controller('salonSalonSettingSettingHomeControllers', function($scope, $state,$ionicPopup,loginInfo) {

	// ユーザー情報
	$scope.salon_name = 'salon Hair Design';
	
	// 遷移
	//サロン：設定：ポイント管理
	$scope.salonSettingPintMan=function() {
		$state.go('salon-setting-point_man',null,'');
	}

	//サロン：設定：マイプロフィール
	$scope.salonSettingSalonDetail=function() {
		$state.go('salon-setting-salon_detail',null,'');
	}

	//サロン：設定：サロンレビュー
	$scope.salonSettingReviewSalon=function() {
		$state.go('salon-setting-review_salon',null,'');
	}

	//サロン：設定：アカウントの設定
	$scope.salonSettingAccount=function() {
		$state.go('salon-setting-account',null,'');
	}

	//サロン：設定：利用規約
	$scope.salonSettingTerms=function() {
		$state.go('salon-setting-terms',null,'');
	}

	//サロン：設定：プライバシーポリシー
	$scope.salonSettingPrivacyPolicy=function() {
		$state.go('salon-setting-privacy_policy',null,'');
	}

	//サロン：設定：特定商取引
	$scope.salonSettingSclt=function() {
		$state.go('salon-setting-sclt',null,'');
	}
	//サロン：ホーム：トップ
	$scope.salonHomeHomeTop=function() {
		$state.go('salon-home-home_top',null,'');
	}
	
	//ログアウト
	$scope.logOut=function(){
		   var confirmPopup = $ionicPopup.confirm({
			     title: '確認',
			     template: 'ログアウトしてもいいですか',
			     cancelText:'キャンセル',
			     okText:'ログアウト',
			   });

			   confirmPopup.then(function(res) {
			     if(res) {
			 		loginInfo.clearLoginInfo();		//ログイン情報クリア（ログアウト）
			 		$state.go('login',null,'');
			     } else {
			     }
			   });		
	}
	
})

;
