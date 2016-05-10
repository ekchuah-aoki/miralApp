angular.module('miral.sample1', ['ionicImageSortable'])

.controller('samile1Controllers', function($scope, $state,  $ionicHistory) {


	$scope.onChangeMode = function(){
		
console.debug('onChangeMode');		
		$('#img_sortable').attr('mode', 'delete');
		
	}
})

;
