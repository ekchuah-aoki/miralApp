angular.module('miral.common.miralUtil', [])

.factory('$loalStorage', ['$window', function($window) {
'use strict';
	  return {
		  set:function(key, value){
			  $window.localStorage[key]=value;
		  },
		  get:function(key, defaultValue){
			  return $window.localStorage[key] || defaultValue;
		  },
		  setObject:function(key, value){
			  $window.localStorage[key]=JSON.stringfy(value);
		  },
		  getObject:function(key){
			  return JSON.parse($window.localStorage[key] || '{}');
		  }
	  };
}])

;


