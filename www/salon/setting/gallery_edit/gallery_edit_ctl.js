angular.module('miral.salon.setting.gallery_edit.controllers', ['ionicImageSortable'
                                                                ,'miral.salon.setting.gallery_edit_fnc'
                                                                ,'miral.common.imageUtil'])

.controller('salonSettingGalleryEditControllers', function($scope, $state,$window
								,salonSettingGalleryEditFnc, miralCommonImageUtil) {

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
					  
					  if(result_.length==0){
						  return;
					  }
					  
					  salonSettingGalleryEditFnc.add(result_,
						 function(res){
							  	var dom1 = $('<div>').addClass('galley_edit_imagebox gallery_edit_new_img').appendTo('#salon_gallery_edit_imglist');;
							  	var dom2 = $('<div>').appendTo(dom1);
							  	$('<img>').attr("src", "data:image/jpeg;base64,"+res.imgbase64data).appendTo(dom2);
					     }
					  );
								
				   }
		);
	}
	
	///////////////////////////////////////////
	//保存ボタン
	$scope.upload=function() {
		
		//画面戻る前にデータをサーバーに
		//＊まだデータ表示だけ
		var imgList = $('#salon_gallery_edit_imglist').find(".galley_edit_imagebox");
		
		for(var i=0; i<imgList.length; i++){
			var img = $(imgList[i]).children('div').children('img');
			
			
			console.log("画像：" + img);
			
			
			
		}

		console.log("画像数：" + imgList.length);
		//$state.go('salon-setting-salon_detail',null,'');
	}

})

;
