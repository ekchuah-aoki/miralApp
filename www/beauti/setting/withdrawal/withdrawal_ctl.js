angular.module('miral.beauti.setting.withdrawal.controllers', [])

.controller('beautiSettingWithdrawalControllers', function($scope, $state) {

	$scope.viewNo = "1";
	
	$scope.withdrawalNext=function(){
		$scope.viewNo="2";
	}

	$scope.withdrawalEnd=function(){
		$scope.viewNo="3";
	}

	
})

;
