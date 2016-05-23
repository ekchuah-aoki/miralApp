angular.module('miral.salon.setting.account_edit.controllers', ['miral.common.miralConst','miral.salon.setting.account_edit_fnc','miral.login.login_fnc'])

.controller('salonSettingAccountEditControllers', function($scope,$state, $stateParams, miralBeautiSettingAccountEditFnc,miralLoginLoginFnc
		, ACCOUNT_SETTING_MODE, PREFECTURE, ACCOUNT_TYPE) {

	
	//入力項目は必ず配列にすること、でないと値が取得できない
//	$scope.login={};
//	$scope.login.userid = "";
//	$scope.login.password = "";

//	$scope.onChangePasswordShow=function(){
//		$scope.isShowPassword = !$scope.isShowPassword;
//	}

	$scope.form = {};
	
	$scope.mail_default ="sample@miral.co.jp";
	
	//登録モードによって表示項目切り替え
	$scope.settingMode = $stateParams.mode;
	
	if($scope.settingMode == ACCOUNT_SETTING_MODE.sns){
		$scope.isShowPassword = false;
	}else{
		$scope.isShowPassword = true;
	}
	
	//都道府県リストの設定
	//$scope.prefectureList1 = [{code:'', name:'選択してください'}, PREFECTURE.tokyo, PREFECTURE.kanagawa];
	$scope.prefectureList1 = [{code:'', name:'選択してください'}];

	var i=1;
	for (var key in PREFECTURE){
		$scope.prefectureList1[i]=PREFECTURE[key];i++
	};
	
	//radioボタン解除
	$(function(){
	    var nowchecked = $('input[value=1]:checked').val();
	    $('input[value=1]').click(function(){
	        if($(this).val() == nowchecked) {
	            $(this).prop('checked', false);
	            nowchecked = false;
	        } else {
	            nowchecked = $(this).val();
	        }
	    });
	});
	

	//入力項目の初期化
	$scope.email = "test@ekchuah.co.jp";
	$scope.pwd = "123456";
	$scope.lastName = "東京";
	$scope.firstName = "太郎";
	$scope.lastNameKana = "トウキョウ";
	$scope.firstNameKana = "タロウ";
	$scope.prefect1 =$scope.prefectureList1[0];
	$scope.shopName = "サロン東京エクチュア";
	$scope.shopNameKana = "サロントウキョウエクチュア";
	$scope.prefect2 =$scope.prefectureList1[0];
	$scope.streetAdd2 = "豊島区";
	$scope.streetAdd3 = "南池袋0-0-0";
	$scope.access = "池袋駅";
	$scope.walk = "0分";
	$scope.access2 = "";
	$scope.walk2 = "";
	$scope.prefect3 =$scope.prefectureList1[0];
	$scope.seat = "0席";
	$scope.openHour = "--";
	$scope.openMinute = "--";
	$scope.closeHour = "--";
	$scope.closeMinute = "--";
	$scope.mon = "0";
	$scope.tues = "0";
	$scope.wed = "0";
	$scope.thurs = "0";
	$scope.fri = "0";
	$scope.sat = "0";
	$scope.sun = "0";
	$scope.holiday = "1";
	$scope.hourPointName = "0000";
	$scope.dayPointName = "0000";
	$scope.cancel = "00";
	$scope.URL = "http://www.ekchuah.biz";
	$scope.conditions = "店内は禁煙です。";

	if($scope.settingMode == ACCOUNT_SETTING_MODE.sns){
		//SNSログイン経由でアカウント登録に遷移してきた場合は
		//アカウント情報がlocalstrageに保存されているので取得して、初期設定する
		accInfo = miralLoginLoginFnc.restoreAccountInfo();

		$scope.email = accInfo.email;
		$scope.pwd = "";
		$scope.lastName = accInfo.lastName;
		$scope.firstName = accInfo.firstName;
		$scope.lastNameKana = "";
	    $scope.firstNameKana = "";
	    $scope.prefect1 =$scope.prefectureList1[0];
	    $scope.shopName = "";
		$scope.shopNameKana = "";
		$scope.prefect2 =$scope.prefectureList1[0];
		$scope.streetAdd2 = "";
		$scope.streetAdd3 = "";
		$scope.access = "";
		$scope.walk = "";
		$scope.access2 = "";
		$scope.walk2 = "";
		$scope.prefect3 =$scope.prefectureList1[0];
		$scope.seat = "";
		$scope.openHour = "";
		$scope.openMinute = "";
		$scope.closeHour = "";
		$scope.closeMinute = "";
		$scope.mon = "";
		$scope.tues = "";
		$scope.wed = "";
		$scope.thurs = "";
		$scope.fri = "";
		$scope.sat = "";
		$scope.sun = "";
		$scope.holiday = "";
		$scope.hourPointName = "";
		$scope.dayPointName = "";
		$scope.cancel = "";
		$scope.URL = "";
		$scope.conditions = "";
		
	}
	
	///////////////////////////////
	//美容師免許に進む
	$scope.onLicense=function(){

		var accInfo = miralLoginLoginFnc.restoreAccountInfo();

		accInfo = _setAccountByInputVal(accInfo);
		
		//入力情報localStrageに保存
		miralBeautiSettingAccountEditFnc.registAccount(accInfo);
		
		$state.go('beauti-setting-license_edit', null, '');
	}
	
	/////////////////////////////////
	//入力値をアカウント情報に設定
	var _setAccountByInputVal=function(accInfo){
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
		
		
		return accInfo;

		
	}

	
})
;
