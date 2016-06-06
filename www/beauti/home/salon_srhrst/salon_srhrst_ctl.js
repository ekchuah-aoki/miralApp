angular.module('miral.beauti.home.salon_srhrst.controllers', ['miral.beauti.home.salon_srhrst.salon_srhrst_fnc'])

.controller('beautiHomeSalonSrhrstControllers', function($scope, $state,  $ionicHistory,beautiHomeSalonSrhrstSalonSrhrstFnc) {

	///////////////////
	//入力項目の初期化
	$scope.form={};
	
	$scope.onSrhSalon=function(){
		
		//取得成功時のコールバック関数
	    var success = function(response){
	    	
	    	$scope.salonList = response.salons;
	    	
	    	for (var i=0; i < $scope.salonList.length; i++){
	    		var s = $scope.salonList[i];
	    		
	    		if (s.compEval == 1){
	    			s.star = "<i class='icon ion-android-star'></i>";
	    		}else if (s.compEval < 2){
	    			s.star = "<i class='icon ion-android-star'></i>"
	    				+"<i class='ion-android-star-half'></i>";
	    		  }else if (s.compEval == 2){
	    			s.star = "<i class='icon ion-android-star'></i>"
	    				+"<i class='icon ion-android-star'></i>";
	    		  }else if (s.compEval < 3){
	    			s.star = "<i class='icon ion-android-star'></i>"
	    				+"<i class='icon ion-android-star'></i>"
	    				+"<i class='ion-android-star-half'></i>";
	    		  }else if (s.compEval == 3){
	    			s.star = "<i class='icon ion-android-star'></i>"
	    				+"<i class='icon ion-android-star'></i>"
	    				+"<i class='icon ion-android-star'></i>";
	    		  }else if (s.compEval < 4){
	    			s.star = "<i class='icon ion-android-star'></i>"
	    				+"<i class='icon ion-android-star'></i>"
	    				+"<i class='icon ion-android-star'></i>"
	    				+"<i class='ion-android-star-half'></i>";
	    		  }else if (s.compEval == 4){
	    			s.star = "<i class='icon ion-android-star'></i>"
		    			+"<i class='icon ion-android-star'></i>"
			    		+"<i class='icon ion-android-star'></i>"
				    	+"<i class='icon ion-android-star'></i>";
	    		  }else if (s.compEval < 5){
	    			s.star = "<i class='icon ion-android-star'></i>"
	    				+"<i class='icon ion-android-star'></i>"
	    				+"<i class='icon ion-android-star'></i>"
	    				+"<i class='icon ion-android-star'></i>"
	    				+"<i class='ion-android-star-half'></i>";
	    		  }else if (s.compEval == 5){
	    			s.star = "<i class='icon ion-android-star'></i>"
	    				+"<i class='icon ion-android-star'></i>"
	    				+"<i class='icon ion-android-star'></i>"
	    				+"<i class='icon ion-android-star'></i>"
	    				+"<i class='icon ion-android-star'></i>";
	    		  }else{
	    			  s.star = "--";
	    		  }
	    	}
	    	
	   	}
	
	    //取得失敗時のコールバック関数
	    var fail = function (){
		    alert('失敗');
	        
	        }
    
	    beautiHomeSalonSrhrstSalonSrhrstFnc.srhSalon('$scope.form.salonName', 1, 10, success, fail);
	    
	    
	    
   }

    //美容師：ホーム：検索結果（未️マッチ）
    $scope.beautiHomeSalonDetail=function() {
    	$state.go('beauti-home-salon-detail',null,'');
    }

})
;
