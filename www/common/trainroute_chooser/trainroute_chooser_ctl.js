angular.module('miral.common.trainroute_chooser.trainroute_chooser.controllers', ['miral.common.trainroute_chooser.trainroute_chooser_fnc','ionicImageSortable'])

.controller('commonTrainrouteChooserTrainrouteChooserControllers', function($scope, $state, $ionicHistory,commonTrainrouteChooserTrainrouteChooserFnc) {


	
/////////////////////////////
	//入力項目の初期化
	$scope.form={};
   　
	//沿線取得
	$scope.onGetTrainList=function(){
		
		//取得成功時のコールバック関数
		var success = function(response){
			trainList = response.trains;
			
			for(var i=0; i< trainList.length; i++){
				
				var t = trainList[i];
				
				console.debug('trainCd:'+t.trainCd+", trainName:"+t.trainName);
			}
		}
		
		//取得失敗時のコールバック関数
		var fail = function (){
			alert('失敗');
		}
		
		commonTrainrouteChooserTrainrouteChooserFnc.getTrainList(1, 10, success, fail);
		
	}
	
	$scope.onSrhStationList=function(){
		
		//取得成功時のコールバック関数
		var success = function(response){
			
			$scope.stationList = response.stations;	
				
		}
		
		//取得失敗時のコールバック関数
		var fail = function (){
			alert('失敗');
		}
        
		commonTrainrouteChooserTrainrouteChooserFnc.srhStationList($scope.form.TName, success, fail);
		
		//進むリンク
		//$state.go('',null,'');
	}
	
})

;