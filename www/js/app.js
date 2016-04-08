// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('miral', ['ionic', ,'ngAnimate', 'ionicLazyLoad', 'ionic.rating', 'miral.common.googleAppenginConnecter'
                         ,'miral.login.controllers'
                         ,'miral.beauti.home.home_top.controllers'
                         ,'miral.beauti.home.salon_srhrst.controllers'
                         ,'miral.beauti.home.salon_detail.controllers'
                         ,'miral.beauti.home.announce.controllers'
                         ,'miral.beauti.home.announce.detail.controllers'
                         ,'miral.beauti.home.request.controllers' 
                         ,'miral.beauti.reserv.reserv_home.controllers'
                         ,'miral.beauti.reserv.reserv_list.controllers'
                         ,'miral.beauti.reserv.reserv_map.controllers'
                         ,'miral.beauti.setting.setting_home.controllers'
                         ,'miral.beauti.setting.beauti_detail.controllers'
                         ,'miral.beauti.setting.account_edit.controllers'
                         ,'miral.beauti.setting.license_edit.controllers'])
                         
.run(function($ionicPlatform,googleAppenginConnecter) {
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
    //google App Engin 初期化
    googleAppenginConnecter.init();
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
	    controller: 'beautiHomeHomeTopControllers'
	  })

  //美容師 ホーム サロン検索結果（未マッチ：スワイプ）
  .state('beauti-home-salon_srhrst', {
	    url: '/beauti/home/salon_srhrst',
	    templateUrl: 'beauti/home/salon_srhrst/salon_srhrst.html',
	    controller: 'beautiHomeSalonSrhrstControllers'
	  })

  //美容師 ホーム サロン情報詳細
  .state('beauti-home-salon-detail', {
	    url: '/beauti/home/salon_detail',
	    templateUrl: 'beauti/home/salon_detail/salon_detail.html',
	    controller: 'beautiHomeSalonDetailControllers'
	  })	  
	  
  //美容師 ホーム　お知らせ
  .state('beauti-home-announce', {
	    url: '/beauti/home/announce',
	    templateUrl: 'beauti/home/announce/announce.html',
	    controller: 'beautiHomeAnnounceControllers'
	  })

  //美容師 ホーム　お知らせ
  .state('beauti-home-announce-detail', {
	    url: '/beauti/home/announce_detail',
	    templateUrl: 'beauti/home/announce_detail/announce_detail.html',
	    controller: 'beautiHomeAnnounceDetailControllers'
	  })	  
	  
  //美容師 ホーム　お問い合わせ
  .state('beauti-home-request', {
	    url: '/beauti/home/request',
	    templateUrl: 'beauti/home/request/request.html',
	    controller: 'beautiHomeRequestControllers'
	  })	  
	  
  //美容師 予約ホーム　
  .state('beauti-reserv-reserv_home', {
	    url: '/beauti/reserv/reserv_home',
	    templateUrl: 'beauti/reserv/reserv_home/reserv_home.html',
	    controller: 'beautiReservReservHomeControllers'
	  })
	  
  //美容師 予約ホーム　サロン検索結果（マッチ済：リスト）
  .state('beauti-reserv-reserv_list', {
	    url: '/beauti/reserv/reserv_list',
	    templateUrl: 'beauti/reserv/reserv_list/reserv_list.html',
	    controller: 'beautiReservReservListControllers'
	  })

  //美容師 予約ホーム　サロン検索結果（マッチ済：MAP）
  .state('beauti-reserv-reserv_map', {
	    url: '/beauti/reserv/reserv_map',
	    templateUrl: 'beauti/reserv/reserv_map/reserv_map.html',
	    controller: 'beautiReservReservMapControllers'
	  })
	  
  //美容師 設定　設定ホーム
  .state('beauti-setting-home', {
	    url: '/beauti/setting/setting_home',
	    templateUrl: 'beauti/setting/setting_home/setting_home.html',
	    controller: 'beautiSettingSettingHomeControllers'
	  })

  //美容師 設定　美容師詳細
  .state('beauti-setting-beauti_detail', {
	    url: '/beauti/setting/beauti_detail',
	    templateUrl: 'beauti/setting/beauti_detail/beauti_detail.html',
	    controller: 'beautiSettingBeautiDetailControllers'
	  })

  //美容師 設定　基本情報の変更
  .state('beauti-setting-accoun_edit', {
	    url: '/beauti/setting/accoun_edit',
	    templateUrl: 'beauti/setting/accoun_edit/accoun_edit.html',
	    controller: 'beautiSettingAccountEditControllers'
	  })

  //美容師 設定　美容師免許の登録
  .state('beauti-setting-license_edit', {
	    url: '/beauti/setting/license_edit',
	    templateUrl: 'beauti/setting/license_edit/license_edit.html',
	    controller: 'beautiSettingLicenseEditControllers'
	  })
	  	  
	  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
