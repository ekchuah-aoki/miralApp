angular.module('miral.beauti.setting.account_edit.controllers', ['miral.common.miralConst','miral.common.account.service'])

.controller('beautiSettingAccountEditControllers', function($scope,$state, $stateParams, miralCommonAccountService
		, ACCOUNT_SETTING_MODE, PREFECTURE, ACCOUNT_TYPE) {

	
	//入力項目は必ず配列にすること、でないと値が取得できない
//	$scope.login={};
//	$scope.login.userid = "";
//	$scope.login.password = "";

//	$scope.onChangePasswordShow=function(){
//		$scope.isShowPassword = !$scope.isShowPassword;
//	}

	$scope.mail_default ="sample@miral.co.jp";
	
	//登録モードによって表示項目切り替え
	$scope.settingMode = $stateParams.mode;
	
	if($scope.settingMode == ACCOUNT_SETTING_MODE.sns){
		$scope.isShowPassword = false;
	}else{
		$scope.isShowPassword = true;
	}
	
	//都道府県リストの設定
	$scope.prefectureList = [{code:'', name:'選択してください'}, PREFECTURE.tokyo, PREFECTURE.kanagawa];
	$scope.prefect =$scope.prefectureList[0];
	
	//入力項目の初期化
	$scope.email = "test@ekchuah.co.jp";
	$scope.lastName = "東京";
	$scope.firstName = "太郎";
	$scope.lastNameKana = "トウキョウ";
	$scope.firstNameKana = "タロウ";
	$scope.pwd = "123456";
	$scope.gender = "1";
	$scope.birthday_y = "1987";
	$scope.birthday_m = "07";
	$scope.birthday_d = "07";
	$scope.prefect =$scope.prefectureList[1];

	if($scope.settingMode == ACCOUNT_SETTING_MODE.sns){
		accInfo = miralCommonAccountService.restoreAccountInfo();

		$scope.email = accInfo.email;
		$scope.lastName = accInfo.lastName;
		$scope.firstName = accInfo.firstName;
		$scope.lastNameKana = "";
		$scope.firstNameKana = "";
		$scope.pwd = "";
		$scope.gender = "";
		$scope.birthday_y = "";
		$scope.birthday_m = "";
		$scope.birthday_d = "";
		$scope.prefect =$scope.prefectureList[1];
		
		
	}
	
	///////////////////////////////
	//美容師免許
	$scope.onLicense=function(){

		var accInfo = miralCommonAccountService.restoreAccountInfo();
		if(!accInfo){
			accInfo = {};
		}
		
		accInfo.email=$scope.email;
		accInfo.acType= ACCOUNT_TYPE.beauti;              
		accInfo.lastName= $scope.lastName;       
		accInfo.firstName= $scope.firstName;
		accInfo.lastNameKana= $scope.lastNameKana;   
		accInfo.firstNameKana= $scope.firstNameKana;            
		accInfo.prefect= $scope.prefect.code;           
		accInfo.pwd= $scope.pwd;                   
		accInfo.gender=parseInt($scope.gender);
		accInfo.birthday_y=$scope.birthday_y;
		accInfo.birthday_m=$scope.birthday_m;
		accInfo.birthday_d=$scope.birthday_d;
		
		//入力情報localStrageに保存
		miralCommonAccountService.saveAccountInfo(accInfo);
		
		$state.go('beauti-setting-license_edit', null, '');
	}
})
;
