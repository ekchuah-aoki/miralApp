angular.module('miral.beauti.setting.license_edit.controllers', ['miral.beauti.setting.license_edit_fnc'])

.controller('beautiSettingLicenseEditControllers', function($scope,$state, miralBeautiSettingLicenseEditFnc) {
	
	
	/////////////////////////////////////
	//アカウント情報保存
	$scope.onSkipLicanseRegist=function(){
		miralBeautiSettingLicenseEditFnc.registAccount();
		
		$state.go("beauti-home-home-top", null, '');
		
	}
	

	
})
;
