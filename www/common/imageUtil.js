angular.module('miral.common.imageUtil', ['miral.common.account.service','miral.loginInfo'])

.factory('miralCommonImageUtil', function(miralCommonAccountService,loginInfo) {

	var myself = {
			///////////////////////////////
			//ライセンスイメージ選択
			showImagPick:function(sucess_, fail_,width_, height_){
				imagePicker.getPictures(sucess_, fail_, 	
						  { // options object, all optional
							title:"アルバム",  
						    maximumImagesCount: 1, // Android only since plugin version 2.1.1, default no limit
						    quality: 70, // 0-100, default 100 which is highest quality
						    width_, //width: 100,  // proportionally rescale image to this width, default no rescale
						    height_, //height: 400, // same for height
						    outputType: imagePicker.OutputType.BASE64_STRING // default .FILE_URI
						  }
				);
				
			}
	}
	
	return myself;
})

;

