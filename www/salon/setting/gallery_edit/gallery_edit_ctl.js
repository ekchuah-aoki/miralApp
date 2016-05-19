angular.module('miral.salon.setting.gallery_edit.controllers', ['ionicImageSortable','miral.common.imageUtil'])

.controller('salonSettingGalleryEditControllers', function($scope, $state,miralCommonImageUtil) {

	$scope.onChangeMode = function(){
		
		console.debug('onChangeMode');		
				$('#img_sortable').attr('mode', 'delete');
	}
	
	/* 追加写真の選択　*/
	$scope.salonAddImg=function() {
		///////////////////////////////
		//写真選択
		miralCommonImageUtil.showImagPick(
				  function(result_) {
					  for (var i = 0; i < result_.length; i++) {
								  // <img>要素を追加
								  $('<img/>').attr("src", "data:image/;base64,"+result_[i]).addClass('gallery_pct').appendTo('#img_sortable');  
					  }
				  });
	}
	
	/*　リンク　*/
	$scope.salonPrf=function() {
		var pct = $('#img_sortable').children('div').children('img');
		

			 console.log(pct);
		
		
		$state.go('salon-setting-salon_detail',null,'');
	}

	

	
	
})

;


