angular.module('miral.beauti.setting.account_edit.controllers', ['miral.common.miralConst','miral.beauti.setting.account_edit_fnc','miral.loginInfo','miral.common.miralUtil'])

.controller('beautiSettingAccountEditControllers', function($scope,$state, $stateParams, $ionicHistory, $ionicNavBarDelegate,$timeout
		, miralBeautiSettingAccountEditFnc,loginInfo
		, ACCOUNT_SETTING_MODE, PREFECTURE, ACCOUNT_TYPE, LOGIN_TYPE,miralConstUtil) {

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
	$scope.prefectureList = [{code:'0', name:'選択してください'}, PREFECTURE.tokyo, PREFECTURE.kanagawa];
	$scope.form.prefect =$scope.prefectureList[0];
	
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
	$scope.form.prefect =$scope.prefectureList[1];

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
				$scope.form.prefect = miralConstUtil.getPrefectureByCode(accInfo_.prefect);
				$scope.form.gender=accInfo_.gender;
				$scope.form.birthday_y=accInfo_.birthday_y;
				$scope.form.birthday_m=accInfo_.birthday_m;
				$scope.form.birthday_d=accInfo_.birthday_d;
			});
		}
		
		miralBeautiSettingAccountEditFnc.getAccount(userInfo.accountId, success);
	}
	
	///////////////////////////////
	//HOME画面遷移
	var goHome=function(){
		userInfo = loginInfo.getUserInfo();

		
		$ionicHistory.nextViewOptions({
			disableBack: true
		});		
		
		console.log('美容師　アカウントでログイン');
		$state.go('beauti-home-home-top',null,'');
		
	}
		
	///////////////////////////////
	//登録進む
	$scope.onTouroku=function(){
		var accInfo = _setAccountByInputVal();
		
		//入力情報保存
		if($scope.settingMode == ACCOUNT_SETTING_MODE.add){
			//新規
			console.debug('新規登録');
			miralBeautiSettingAccountEditFnc.registAccount(accInfo,
					function(resp){
						goHome();
					}
			)
		}else{
			//修正
			console.debug('修正');
			_accountModiy(accInfo, function(resp){
							var backView = $ionicHistory.backView();
							if( !backView){
								//戻り先がない場合はHOMEへ
								goHome();
							}else{
								$ionicHistory.goBack();
							}
						}
			);
		}
	}
	
	/////////////////////////////////		

	//修正登録処理
	var _accountModiy=function(accInfo_, success_){
		var userInfo = loginInfo.getUserInfo();
		accInfo_.accountId = userInfo.accountId;
		
		miralBeautiSettingAccountEditFnc.modifyAccount(accInfo_,
				function(resp){
					//修正ということは、正規登録
					loginInfo.setLoginInfo({temporary:false});
					
					if (success_){
						success_(resp);
					}
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
		accInfo.prefect= $scope.form.prefect.code;   
		accInfo.pwd= $scope.form.pwd;                   
		accInfo.gender=parseInt($scope.form.gender);
		accInfo.birthday_y=$scope.form.birthday_y;
		accInfo.birthday_m=$scope.form.birthday_m;
		accInfo.birthday_d=$scope.form.birthday_d;
		
		return accInfo;
		
		
	}	

	
	
})

