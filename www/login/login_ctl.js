angular.module('miral.login.controllers', [])

.controller('loginControllers', function($scope, $state) {

	$scope.timestamp = new Date().getTime();

//	$scope.isShowPassword = false;

	//入力項目は必ず配列にすること、でないと値が取得できない
//	$scope.login={};
//	$scope.login.userid = "";
//	$scope.login.password = "";

//	$scope.onChangePasswordShow=function(){
//		$scope.isShowPassword = !$scope.isShowPassword;
//	}

	$scope.onLogin=function() {
			$state.go('beauti-home-home-top',null,'');
	}

	$scope.onNew=function() {
		$state.go('beauti-setting-account_edit',null,'');
}
	
	//初期ビュー
	$scope.viewNo = "1";

	$scope.prop = {};
	$scope.prop.headerColor = "calm";

	$scope.getHeaderClass = function(){
		var cl =  ["bar-subheader"];
		cl.push("bar-"+$scope.prop.headerColor);
		return cl;
	}

	$scope.onLoginEntry=function(){
		$scope.viewNo="2";
	}

	$scope.onNewEntry=function(){
		$scope.viewNo="3";
	}

	$scope.onMallLogin=function(){
		$scope.viewNo="4";
	}

})

;
