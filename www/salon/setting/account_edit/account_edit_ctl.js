angular.module('miral.salon.setting.account_edit.controllers', ['miral.common.miralConst'
                                                                ,'miral.salon.setting.account_edit_fnc'
                                                                ,'miral.login.login_fnc'
                                                                ,'miral.common.miralUtil'])

.controller('salonSettingAccountEditControllers', function($scope,$state, $stateParams, salonSettingAccountEditFnc,miralLoginLoginFnc
		, ACCOUNT_SETTING_MODE, PREFECTURE, ACCOUNT_TYPE,miralStrUtil,miralConstUtil) {

	
	
	//入力項目は必ず配列にすること、でないと値が取得できない
	$scope.mail_default ="salon@miral.co.jp";
	
	//登録モードによって表示項目切り替え
	$scope.settingMode = $stateParams.mode;
	
	//都道府県リストの設定
	$scope.prefectureList = [{code:'', name:'選択してください'}];

	var i=1;
	for (var key in PREFECTURE){
		$scope.prefectureList.push(PREFECTURE[key]);i++
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
	$scope.form={};

	if($scope.settingMode == ACCOUNT_SETTING_MODE.add){
		$scope.form.email = "salon@ekchuah.co.jp";
		$scope.form.pwd = "1234";
		$scope.form.lastName = "花子";
		$scope.form.firstName = "東京";
		$scope.form.lastNameKana = "ハナコ";
		$scope.form.firstNameKana = "トウキョウ";
		$scope.form.prefect1 =miralConstUtil.getPrefectureByCode(PREFECTURE.tokyo.code);

		$scope.form.shopName = "試験美容室";
		$scope.form.shopNameKana = "テストサロン";
		$scope.form.prefect2 =miralConstUtil.getPrefectureByCode(PREFECTURE.tokyo.code);
		$scope.form.streetAdd1 = "港区芝公園";	
		$scope.form.streetAdd2 = "４丁目２−８";
		$scope.form.access = "赤羽橋";
		$scope.form.walk = "1";
		$scope.form.seat = "1";
		$scope.form.openHour = "10";
		$scope.form.openMinute = "00";
		$scope.form.closeHour = "20";
		$scope.form.closeMinute = "30";
		$scope.form.holiday = "";
		$scope.form.oneHourPoint = "6000";
		$scope.form.oneDayPoint = "25000";
		$scope.form.cancel = "30";
		$scope.form.URL = "www.test.co.jp";
		$scope.form.conditions = "利用条件だよ";
		
	}else{
		
	}
	

	

	$scope.touroku=function() {
		
		salonInfo = {};

		//アカウント共通情報
		salonInfo.email = $scope.form.email; 
		salonInfo.pwd = $scope.form.pwd; 
		salonInfo.lastName = $scope.form.lastName; 
		salonInfo.firstName = $scope.form.firstName; 
		salonInfo.prefecturesCd = miralStrUtil.toInt($scope.form.prefect1.code); 
		
		//アカウントサロン情報
		salonInfo.name = $scope.form.shopName;
		salonInfo.nameKana = $scope.form.shopNameKana;
		salonInfo.prefecturesCd = miralStrUtil.toInt($scope.form.prefect2.code);
		salonInfo.streetAdd1 = $scope.form.streetAdd1;
		salonInfo.streetAdd2 = $scope.form.streetAdd2;
		salonInfo.stationCd = 0;	//$scope.form.access　TODO:画面を選択に変える
		salonInfo.workingTime = miralStrUtil.toInt($scope.form.walk);
		salonInfo.mirrorCnt = miralStrUtil.toInt($scope.form.seat);
		salonInfo.openTime = $scope.form.openHour+$scope.form.openMinute;
		salonInfo.closeTime = $scope.form.closeHour+$scope.form.closeMinute;
		salonInfo.holiday = $scope.form.holiday;
		//salonInfo.oneHourPoint = $scope.form.oneHourPoint;
		//salonInfo.oneDayPoint = $scope.form.oneHourPoint;
		//salonInfo.cancelPer = $scope.form.cancel;
		salonInfo.hpUrl = $scope.form.URL;
		salonInfo.conditions = $scope.form.conditions;
		
		//アカウント登録処理を実行
		if($scope.settingMode == ACCOUNT_SETTING_MODE.add){
			
			console.log('新規登録');
			
			salonSettingAccountEditFnc.registAccount(salonInfo
					,function(){
						$state.go('salon-home-home_top',null,'');
					}
			);
			
		}else{
			console.log('変更登録');
			
		}
		
	}
	
})
;
