angular.module('miral.common.miralUtil', ['miral.common.miralConst'])

.factory('$localStorage', ['$window', function($window) {
'use strict';
	  return {
		  remove:function(key){
			  $window.localStorage.removeItem(key);
		  },
		  set:function(key, value){
			  $window.localStorage[key]=value;
		  },
		  get:function(key, defaultValue){
			  return $window.localStorage[key] || defaultValue;
		  },
		  setObject:function(key, value){
			  $window.localStorage[key]=JSON.stringify(value);
		  },
		  getObject:function(key){
			  return JSON.parse($window.localStorage[key] || '{}');
		  }
	  };
}])

.factory('miralStrUtil', ['$window', function($window) {
'use strict';
	  var myself = {
		  toInt:function(val){
			  if(myself.isEmpty){
				  return 0;
			  }
			  
			  return parseInt(val,10);
		  },
		  intToStr(val, omitZero){
			  if (val == undefined || val==null || val == 0){
				  if (omitZero){
					  return "";
				  }
				  return "0";
			  }
			  
			  return val.toString(val, 10);
		  },
		  isEmpty:function(val){
			  
			  val = val.toString();
			  
			  if (val == undefined || val==null || val == ""){
				  return true;
			  }
			  
			  return false;
		  }
	  };
	  
	  return myself;
}])

.factory('miralConstUtil', function(PREFECTURE) {
'use strict';
	  return {
		  getPrefectureNameByCode:function(code_){
			  for(var key in PREFECTURE){
				  if( PREFECTURE[key].code == code_){
					  return PREFECTURE[key].name;
				  } 
			  }
			  
			  return "";
		  },		  
		  getPrefectureByCode:function(code_){
			  for(var key in PREFECTURE){
				  if( PREFECTURE[key].code == code_){
					  return PREFECTURE[key];
				  } 
			  }
			  
			  return;
		  }		  
	  }
 })

;


