angular.module('miral.common.miralMap', [])

.factory('miralMap', ['$window', function($window) {
'use strict';
	  return {
		  geoCoder:function(address_, success_, fail_){
			  
			  
			  
			  var request = {
					  'address': address_
			  };
			  plugin.google.maps.Geocoder.geocode(request, function(results) {
				  if (results.length) {
					    var result = results[0];
					    
						console.debug('miralMap.geoCoder!!!!!');
						console.debug('address:'+address_+' lat:'+result.position.lat+" , lng:"+result.position.lng);
					    console.log(result.position.lat);
					    
					    success_(result);
					    

				  } else {
					  if( fail_ ){
						  fail_();
					  }
					  console.debug('miralMap.geoCoder!!!!! fail');
				  }
			  });		  
		  },
	  };
}])

;


