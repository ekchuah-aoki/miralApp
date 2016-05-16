angular.module('miral.common.imageUtil', ['miral.loginInfo'])

.factory('miralCommonImageUtil', function(loginInfo) {

	var myself = {
			///////////////////////////////
			//ライセンスイメージ選択
			showImagPick:function(sucess_, fail_,width_, height_, count_){

				
				imagePicker.getPictures(sucess_, fail_, opt_	
						  { // options object, all optional
							title:"アルバム",  
						    maximumImagesCount: count_, // Android only since plugin version 2.1.1, default no limit
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

