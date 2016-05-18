angular.module('miral.beauti.setting.license_edit.controllers', ['miral.beauti.setting.license_edit_fnc'])

.controller('beautiSettingLicenseEditControllers', function($scope,$state, miralBeautiSettingLicenseEditFnc) {
	
	$scope.selectedImag = false;
	$scope.licenseImgData = "";
	$scope.licenseImgType = "";	
	console.debug('■■■■■■■■■■■■■■■■');			

	
	/////////////////////////////////////
	//美容師免許画像取得
	miralBeautiSettingLicenseEditFnc.getLicenseImg(function(imgData_){
		$scope.$apply(function(){
			$scope.licenseImgType ="data:image/;base64,"
			$scope.licenseImgData= imgData_;
			$scope.selectedImag = true;
		});
	})
	
	/////////////////////////////////////
	//美容師免許登録登録しないでスキップ
	$scope.onSkipLicanseRegist=function(){
		$state.go("beauti-home-home-top", null, '');
	}

	/////////////////////////////////////
	//美容師免許登録
	$scope.onLicanseRegist=function(){
		if(!$scope.selectedImag){
			return;
		}
		
		miralBeautiSettingLicenseEditFnc.licenseRegist(
				$scope.licenseImgData,
				//成功
				function(){
					$state.go("beauti-home-home-top", null, '');
				}
		);
		
		
	}

	///////////////////////////////
	//ライセンスイメージ選択
	$scope.onLicenseImagPick=function(){
		miralBeautiSettingLicenseEditFnc.licenseImagPick(function(imgData_){
			$scope.$apply(function(){
				$scope.licenseImgType ="data:image/;base64,"
				$scope.licenseImgData= imgData_;
				$scope.selectedImag = true;
			});
		});
		
	}
	

	
})
;
