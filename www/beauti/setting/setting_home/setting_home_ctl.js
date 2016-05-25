angular.module('miral.beauti.setting.setting_home.controllers', ['miral.loginInfo'])

.controller('beautiSettingSettingHomeControllers', function($scope,$state,$ionicPopup,loginInfo) {
	
	// ユーザー情報 
	$scope.user_name = '本田涼子';
	$scope.user_img ='beauti.png';
	
	// ポイント 
	$scope.point = '200';

	// -- 遷移 -- 
	//美容師：設定：ポイント管理
	$scope.beautiSettingPointMan=function() {
		$state.go('beauti-setting-point_man',null,'');
	}

	//美容師：設定：マイプロフィール
	$scope.beautiSettingBeautiDetail=function() {
		$state.go('beauti-setting-beauti_detail',null,'');
	}

	//美容師：設定：レビュー
	$scope.beautiSettingReview=function() {
		$state.go('beauti-setting-review',null,'');
	}

	//美容師：設定：アカウントの設定
	$scope.beautiSettingAccount=function() {
		$state.go('beauti-setting-account',null,'');
	}

	//美容師：設定：利用規約
	$scope.beautiSettingTerms=function() {
		$state.go('beauti-setting-terms',null,'');
	}

	//美容師：設定：プライバシーポリシー
	$scope.beautiSettingPrivacyPolicy=function() {
		$state.go('beauti-setting-privacy_policy',null,'');
	}

	//美容師：設定：特定商取引
	$scope.beautiSettingSclt=function() {
		$state.go('beauti-setting-sclt',null,'');
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
