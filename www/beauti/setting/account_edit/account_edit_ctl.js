angular.module('miral.beauti.setting.account_edit.controllers', ['miral.common.miralConst','miral.beauti.setting.account_edit_fnc','miral.loginInfo'])

.controller('beautiSettingAccountEditControllers', function($scope,$state, $stateParams, $ionicHistory, $ionicNavBarDelegate
		, miralBeautiSettingAccountEditFnc,loginInfo
		, ACCOUNT_SETTING_MODE, PREFECTURE, ACCOUNT_TYPE, LOGIN_TYPE) {

	//入力項目は必ず配列にすること、でないと値が取得できない
//	$scope.form.login={}
//	$scope.form.login.userid = ""
//	$scope.form.login.password = ""

//	$scope.onChangePasswordShow=function(){
//		$scope.form.isShowPassword = !$scope.form.isShowPassword
//	}
	console.log('beautiSettingAccountEditControllers start');
	$scope.form = {};
	
	$scope.form.mail_default ="sample@miral.co.jp";
	
	//登録モードによって表示項目切り替え
	$scope.settingMode = $stateParams.mode;
	
	//ログインタイプ
	var userInfo = loginInfo.getUserInfo();
	
	if(userInfo.loginType==LOGIN_TYPE.miralAccount){
		$scope.isShowPassword = true;
	}else{
		$scope.isShowPassword = false;
	}
	
	//都道府県リストの設定
	$scope.prefectureList = [{code:'', name:'選択してください'}, PREFECTURE.tokyo, PREFECTURE.kanagawa];
	$scope.form.prefect =$scope.prefectureList[0].code;
	
	//入力項目の初期化(デバッグよう）
	$scope.form.email = "test@ekchuah.co.jp";
	$scope.form.lastName = "東京";
	$scope.form.firstName = "太郎";
	$scope.form.lastNameKana = "トウキョウ";
	$scope.form.firstNameKana = "タロウ";
	$scope.form.pwd = "123456";
	$scope.form.gender = "1";
	$scope.form.birthday_y = "1987";
	$scope.form.birthday_m = "7";
	$scope.form.birthday_d = "7";
	$scope.form.prefect =$scope.prefectureList[1].code;

	if($scope.settingMode == ACCOUNT_SETTING_MODE.add){
		//新規
		console.debug('アカウント設定　新規モード');
	}else{
		console.debug('アカウント設定　修正モード');
		//編集モード
		//既存情報読み込み
		var userInfo = loginInfo.getUserInfo();
		
		var success = function(accInfo_){
			$scope.$apply(function(){
				$scope.form.email=accInfo_.email;
				$scope.form.lastName = accInfo_.lastName;       
				$scope.form.firstName = accInfo_.firstName;
				$scope.form.lastNameKana= accInfo_.lastNameKana ;  
				$scope.form.firstNameKana= accInfo_.firstNameKana;            
				$scope.form.prefect = accInfo_.prefect;           
				$scope.form.gender=accInfo_.gender;
				$scope.form.birthday_y=accInfo_.birthday_y;
				$scope.form.birthday_m=accInfo_.birthday_m;
				$scope.form.birthday_d=accInfo_.birthday_d;
			});
		}
		
		miralBeautiSettingAccountEditFnc.getAccount(userInfo.accountId, success);
	}
	
	///////////////////////////////
	//美容師免許に進む
	$scope.onLicense=function(){
		var accInfo = _setAccountByInputVal();
		
		//入力情報保存
		if($scope.settingMode == ACCOUNT_SETTING_MODE.add){
			//新規
			console.debug('新規登録');
			miralBeautiSettingAccountEditFnc.registAccount(accInfo,
					function(resp){
						$state.go('beauti-setting-license_edit', null, '');
					}
			)
		}else{
			//修正
			console.debug('修正');
			_accountModiy();
		}
	}
	
	/////////////////////////////////
	//修正登録処理
	var _accountModiy=function(){
		var userInfo = loginInfo.getUserInfo();
		accInfo.accountId = userInfo.accountId;
		
		miralBeautiSettingAccountEditFnc.modifyAccount(accInfo,
				function(resp){
					//修正ということは、正規登録
					loginInfo.setLoginInfo({temporary:false});
					
					$state.go('beauti-setting-license_edit', null, '');
				}
		)
		
	}

	/////////////////////////////////
	//入力値をアカウント情報に設定
	var _setAccountByInputVal=function(){
		
		accInfo = {};
		accInfo.email=$scope.form.email;
		accInfo.acType= ACCOUNT_TYPE.beauti;          
		accInfo.lastName= $scope.form.lastName;       
		accInfo.firstName= $scope.form.firstName;
		accInfo.lastNameKana= $scope.form.lastNameKana;   
		accInfo.firstNameKana= $scope.form.firstNameKana;            
		accInfo.prefect= $scope.form.prefect;   
		accInfo.pwd= $scope.form.pwd;                   
		accInfo.gender=parseInt($scope.form.gender);
		accInfo.birthday_y=$scope.form.birthday_y;
		accInfo.birthday_m=$scope.form.birthday_m;
		accInfo.birthday_d=$scope.form.birthday_d;
		
		return accInfo;
		
		
	}	

	
	
})

