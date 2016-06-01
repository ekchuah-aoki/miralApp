angular.module('miral.sample.sample1', ['miral.sample.sample1_fnc','ionicImageSortable'])

.controller('sampleSamile1Controllers', function($scope, $state,  $ionicHistory,sampleSample1Fnc) {


	/////////////////////////////
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
		
		sampleSample1Fnc.getTrainList(1, 10, success, fail);
		
	}
	
	$scope.onSrhStationList=function(){
		
		//取得成功時のコールバック関数
		var success = function(response){
			sList = response.stations;
			
			for(var i=0; i< sList.length; i++){
				
				var s = sList[i]; 
				
				console.debug("trainName:"+s.trainName+"  stationName:"+s.stationName);
			}
		}
		
		//取得失敗時のコールバック関数
		var fail = function (){
			alert('失敗');
		}
		
		sampleSample1Fnc.srhStationList('原', success, fail);
		
	}
	
	
	
	$scope.onChangeMode = function(){
		
		console.debug('onChangeMode');		
		$('#img_sortable').attr('mode', 'delete');
		
	}
	
	
	$scope.onSrhSalon=function(){
		
		//取得成功時のコールバック関数
		var success = function(response){

			console.debug("検索件数:"+response.count);
			
			sList = response.salons;
			
			for(var i=0; i< sList.length; i++){
				
				var s = sList[i]; 
				
				console.debug("name:"+s.name);
			}
		}
		
		//取得失敗時のコールバック関数
		var fail = function (){
			alert('失敗');
		}
		
		sampleSample1Fnc.srhSalon('池袋', 1, 10, success, fail);
		
	}	
})

;
