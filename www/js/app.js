// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('miral', ['ionic', ,'ngAnimate', 'ionicLazyLoad', 'ionic.rating'
                         ,'miral.login.controllers'
                         ,'miral.beauti.home.home_top.controllers'
                         ,'miral.beauti.reserv_home.reserv_list.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
  ///////////////////////////////////////////////////////
  //ログイン
  .state('login', {
	    url: '/login',
	    templateUrl: 'login/login.html',
	    controller: 'loginControllers'
	  })
  
  
  //カテゴリ：美容師
  //美容師 ホーム
  .state('beauti-home-home-top', {
	    url: '/beauti/home/home_top',
	    templateUrl: 'beauti/home/home_top/home_top.html',
	    controller: 'beautiReservHomeReservListControllers'
	  })

	  
	  
  //美容師 マッチ
  .state('beauti-reserv_home-reserv_list', {
	    url: '/beauti/reserv_home/reserv_list',
	    templateUrl: 'beauti/reserv_home/reserv_list/reserv_list.html',
	    controller: 'beautiReservHomeReservListControllers'
	  })
  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
