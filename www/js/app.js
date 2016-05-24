// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('miral', ['ionic', 'ngCordovaOauth','ngAnimate', 'ionicLazyLoad', 'ionic.rating', 'miral.common.googleAppenginConnecter'
                         ,'miral.login.controllers'
                         ,'miral.beauti.home.home_top.controllers'
                         ,'miral.beauti.home.salon_srhrst.controllers'
                         ,'miral.beauti.home.salon_detail.controllers'
                         ,'miral.beauti.home.guides_owner.controllers'
                         ,'miral.beauti.home.guides_miral.controllers' 
                         ,'miral.beauti.home.announce.controllers'
                         ,'miral.beauti.home.announce.detail.controllers'
                         ,'miral.beauti.home.request.controllers' 
                         ,'miral.beauti.reserv.reserv_home.controllers'
                         ,'miral.beauti.reserv.reserv_list.controllers'
                         ,'miral.beauti.reserv.reserv_map.controllers'
                         ,'miral.beauti.reserv.salon_list.controllers'
                         ,'miral.beauti.reserv.reservation.controllers'
                         ,'miral.beauti.reserv.favorite.controllers'
                         ,'miral.beauti.reserv.reserv_info.controllers'
                         ,'miral.beauti.reserv.message_list.controllers'
                         ,'miral.beauti.reserv.message.controllers'
                         ,'miral.beauti.setting.setting_home.controllers'
                         ,'miral.beauti.setting.point_man.controllers'
                         ,'miral.beauti.setting.point_buy.controllers'
                         ,'miral.beauti.setting.beauti_detail.controllers'
                         ,'miral.beauti.setting.beauti_edit.controllers'
                         ,'miral.beauti.setting.review.controllers'
                         ,'miral.beauti.setting.account.controllers'
                         ,'miral.beauti.setting.account_edit.controllers'
                         ,'miral.beauti.setting.license_edit.controllers'
                         ,'miral.beauti.setting.help.controllers'
                         ,'miral.beauti.setting.help_detail.controllers'
                         ,'miral.beauti.setting.terms.controllers'
                         ,'miral.beauti.setting.privacy_policy.controllers'
                         ,'miral.beauti.setting.sclt.controllers'
                         ,'miral.beauti.setting.withdrawal.controllers'
                         ,'miral.salon.home.home_top.controllers'
                         ,'miral.salon.home.announce.controllers'
                         ,'miral.salon.home.announce_detail.controllers'
                         ,'miral.salon.home.request.controllers'
                         ,'miral.salon.schedule.share_request.controllers'
                         ,'miral.salon.schedule.beauti_list.controllers'
                         ,'miral.salon.schedule.reserv_today.controllers'
                         ,'miral.salon.schedule.reserv_tomorrow.controllers'
                         ,'miral.salon.schedule.reserv_hst.controllers'
                         ,'miral.salon.schedule.message_list.controllers'
                         ,'miral.salon.schedule.message.controllers'
                         ,'miral.salon.setting.setting_home.controllers'
                         ,'miral.salon.setting.point_man.controllers'
                         ,'miral.salon.setting.salon_detail.controllers'
                         ,'miral.salon.setting.salon_edit.controllers'
                         ,'miral.salon.setting.review.controllers'
                         ,'miral.salon.setting.account.controllers'
                         ,'miral.salon.setting.account_edit.controllers'
                         ,'miral.salon.setting.terms.controllers'
                         ,'miral.salon.setting.privacy_policy.controllers'
                         ,'miral.salon.setting.sclt.controllers'
                         ,'miral.common.navi_bar.controllers'
                         ,'miral.salon.setting.gallery_edit.controllers'
                         ,'miral.sample.sample1'
                         ])
                         
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
  //------------------------------------
  //          カテゴリ：美容師
  //------------------------------------
  //-----  beauti-home -----
  // 美容師 ホーム
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

  //美容師 ホーム　ミラルのてびき
  .state('beauti-home-guides_miral', {
	    url: '/beauti/home/guides_miral',
	    templateUrl: 'beauti/home/guides_miral/guides_miral.html',
	    controller: 'beautiHomeGuidesMiralControllers'
	  })

  //美容師 ホーム　オーナーのてびき
  .state('beauti-home-guides_owner', {
	    url: '/beauti/home/guides_owner',
	    templateUrl: 'beauti/home/guides_owner/guides_owner.html',
	    controller: 'beautiHomeGuidesOwnerControllers'
	  })

  //美容師 ホーム　お知らせ
  .state('beauti-home-announce', {
	    url: '/beauti/home/announce',
	    templateUrl: 'beauti/home/announce/announce.html',
	    controller: 'beautiHomeAnnounceControllers'
	  })

  //美容師 ホーム　お知らせ詳細
  .state('beauti-home-announce_detail', {
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

  //-----  beauti-reserv -----
  //美容師 予約ホーム　
  .state('beauti-reserv-reserv_home', {
	    url: '/beauti/reserv/reserv_home',
	    templateUrl: 'beauti/reserv/reserv_home/reserv_home.html',
	    controller: 'beautiReservReservHomeControllers'
	  })
	  
  //美容師 予約　サロン検索結果（マッチ済：リスト）
  .state('beauti-reserv-reserv_list', {
	    url: '/beauti/reserv/reserv_list',
	    templateUrl: 'beauti/reserv/reserv_list/reserv_list.html',
	    controller: 'beautiReservReservListControllers'
	  })

  //美容師 予約　サロン検索結果（マッチ済：MAP）
  .state('beauti-reserv-reserv_map', {
	    url: '/beauti/reserv/reserv_map',
	    templateUrl: 'beauti/reserv/reserv_map/reserv_map.html',
	    controller: 'beautiReservReservMapControllers'
	  })

  //美容師 予約　予約
  .state('beauti-reserv-reservation', {
	    url: '/beauti/reserv/reservation',
	    templateUrl: 'beauti/reserv/reservation/reservation.html',
	    controller: 'beautiReservReservationControllers'
	  })

  //美容師 予約　サロン一覧
  .state('beauti-reserv-salon_list', {
	    url: '/beauti/reserv/salon_list',
	    templateUrl: 'beauti/reserv/salon_list/salon_list.html',
	    controller: 'beautiReservSalonListControllers'
	  })

  //美容師 予約　お気に入り
  .state('beauti-reserv-favorite', {
	    url: '/beauti/reserv/favorite',
	    templateUrl: 'beauti/reserv/favorite/favorite.html',
	    controller: 'beautiReservFavoriteControllers'
	  })

  //美容師 予約　一覧・履歴・詳細表示
  .state('beauti-reserv-reserv_info', {
	    url: '/beauti/reserv/reserv_info',
	    templateUrl: 'beauti/reserv/reserv_info/reserv_info.html',
	    controller: 'beautiReservReservInfoControllers'
	  })

  //美容師 予約　メッセージ一覧
  .state('beauti-reserv-message_list', {
	    url: '/beauti/reserv/message_list',
	    templateUrl: 'beauti/reserv/message_list/message_list.html',
	    controller: 'beautiReservMessageListControllers'
	  })

  //美容師 予約　メッセージ
  .state('beauti-reserv-message', {
	    url: '/beauti/reserv/message',
	    templateUrl: 'beauti/reserv/message/message.html',
	    controller: 'beautiReservMessageControllers'
	  })

  //-----  beauti-setting -----	  
  //美容師 設定　設定ホーム
  .state('beauti-setting-home', {
	    url: '/beauti/setting/setting_home',
	    templateUrl: 'beauti/setting/setting_home/setting_home.html',
	    controller: 'beautiSettingSettingHomeControllers'
	  })

  //美容師 設定　ポイント管理
  .state('beauti-setting-point_man', {
	    url: '/beauti/setting/point_man',
	    templateUrl: 'beauti/setting/point_man/point_man.html',
	    controller: 'beautiSettingPointManControllers'
	  })

  //美容師 設定　ポイント購入
  .state('beauti-setting-point_buy', {
	    url: '/beauti/setting/point_buy',
	    templateUrl: 'beauti/setting/point_buy/point_buy.html',
	    controller: 'beautiSettingPointBuyControllers'
	  })

  //美容師 設定　マイプロフィール
  .state('beauti-setting-beauti_detail', {
	    url: '/beauti/setting/beauti_detail',
	    templateUrl: 'beauti/setting/beauti_detail/beauti_detail.html',
	    controller: 'beautiSettingBeautiDetailControllers'
	  })

  //美容師 設定　マイプロフィールの編集
  .state('beauti-setting-beauti_edit', {
	    url: '/beauti/setting/beauti_edit',
	    templateUrl: 'beauti/setting/beauti_edit/beauti_edit.html',
	    controller: 'beautiSettingBeautiEditControllers'
	  })

  //美容師 設定　レビュー
  .state('beauti-setting-review', {
	    url: '/beauti/setting/review',
	    templateUrl: 'beauti/setting/review/review.html',
	    controller: 'beautiSettingReviewControllers'
	  })

  //美容師 設定　アカウントの設定
  .state('beauti-setting-account', {
	    url: '/beauti/setting/account',
	    templateUrl: 'beauti/setting/account/account.html',
	    controller: 'beautiSettingAccountControllers'
	  })

  //美容師 設定　基本情報の変更
  .state('beauti-setting-account_edit', {
	    url: '/beauti/setting/account_edit/:mode',
	    templateUrl: 'beauti/setting/account_edit/account_edit.html',
	    controller: 'beautiSettingAccountEditControllers'
	  })

  //美容師 設定　美容師免許の登録
  .state('beauti-setting-license_edit', {
	    url: '/beauti/setting/license_edit',
	    templateUrl: 'beauti/setting/license_edit/license_edit.html',
	    controller: 'beautiSettingLicenseEditControllers'
	  })

  //美容師 設定　ヘルプ
  .state('beauti-setting-help', {
	    url: '/beauti/setting/help',
	    templateUrl: 'beauti/setting/help/help.html',
	    controller: 'beautiSettingHelpControllers'
	  })

  //美容師 設定　ヘルプ詳細
  .state('beauti-setting-help_detail', {
	    url: '/beauti/setting/help_detail',
	    templateUrl: 'beauti/setting/help_detail/help_detail.html',
	    controller: 'beautiSettingHelpDetailControllers'
	  })

  //美容師 設定　利用規約
  .state('beauti-setting-terms', {
	    url: '/beauti/setting/terms',
	    templateUrl: 'beauti/setting/terms/terms.html',
	    controller: 'beautiSettingTermsControllers'
	  })

  //美容師 設定　プライバシーポリシー
  .state('beauti-setting-privacy_policy', {
	    url: '/beauti/setting/privacy_policy',
	    templateUrl: 'beauti/setting/privacy_policy/privacy_policy.html',
	    controller: 'beautiSettingPrivacyPolicyControllers'
	  })

  //美容師 設定　特定商取引
  .state('beauti-setting-sclt', {
	    url: '/beauti/setting/sclt',
	    templateUrl: 'beauti/setting/sclt/sclt.html',
	    controller: 'beautiSettingScltControllers'
	  })

  //美容師 設定　退会
  .state('beauti-setting-withdrawal', {
	    url: '/beauti/setting/withdrawal',
	    templateUrl: 'beauti/setting/withdrawal/withdrawal.html',
	    controller: 'beautiSettingWithdrawalControllers'
	  })

  //------------------------------------
  //          カテゴリ：サロン
  //------------------------------------
  //-----  salon-home -----
  // サロン ホーム　トップ
  .state('salon-home-home_top', {
	    url: '/salon/home/home_top',
	    templateUrl: 'salon/home/home_top/home_top.html',
	    controller: 'salonHomeHomeTopControllers'
	  })

  //　サロン ホーム お知らせ
  .state('salon-home-announce', {
	    url: '/salon/home/announce',
	    templateUrl: 'salon/home/announce/announce.html',
	    controller: 'salonHomeAnnounceControllers'
	  })

  //　サロン ホーム お知らせ　詳細
  .state('salon-home-announce_detail', {
	    url: '/salon/home/announce_detail',
	    templateUrl: 'salon/home/announce_detail/announce_detail.html',
	    controller: 'salonHomeAnnounceDetailControllers'
	  })

  //　サロン ホーム　ご意見・お問い合わせ
  .state('salon-home-request', {
	    url: '/salon/home/request',
	    templateUrl: 'salon/home/request/request.html',
	    controller: 'salonHomeRequestControllers'
	  })

  //-----  salon-schedule -----
  // サロン スケジュール　シェアリクエスト
  .state('salon-schedule-share_request', {
	    url: '/salon/schedule/share_request',
	    templateUrl: 'salon/schedule/share_request/share_request.html',
	    controller: 'salonScheduleShareRequestControllers'
	  })

  //　サロン スケジュール 美容師一覧
  .state('salon-schedule-beauti_list', {
	    url: '/salon/schedule/beauti_list',
	    templateUrl: 'salon/schedule/beauti_list/beauti_list.html',
	    controller: 'salonScheduleBeautiListControllers'
	  })

  //　サロン スケジュール 今日の予定
  .state('salon-schedule-reserv_today', {
	    url: '/salon/schedule/reserv_today',
	    templateUrl: 'salon/schedule/reserv_today/reserv_today.html',
	    controller: 'salonScheduleReservTodayControllers'
	  })

  //　サロン スケジュール　明日の予定
  .state('salon-schedule-reserv_tomorrow', {
	    url: '/salon/schedule/reserv_tomorrow',
	    templateUrl: 'salon/schedule/reserv_tomorrow/reserv_tomorrow.html',
	    controller: 'salonScheduleReservTomorrowControllers'
	  })

  // サロン スケジュール　予約履歴
  .state('salon-schedule-reserv_hst', {
	    url: '/salon/schedule/reserv_hst',
	    templateUrl: 'salon/schedule/reserv_hst/reserv_hst.html',
	    controller: 'salonScheduleReservHstControllers'
	  })

  //　サロン スケジュール メッセージ一覧
  .state('salon-schedule-message_list', {
	    url: '/salon/schedule/message_list',
	    templateUrl: 'salon/schedule/message_list/message_list.html',
	    controller: 'salonScheduleMessageListControllers'
	  })

  //　サロン スケジュール メッセージ
  .state('salon-schedule-message', {
	    url: '/salon/schedule/message',
	    templateUrl: 'salon/schedule/message/message.html',
	    controller: 'salonScheduleMessageControllers'
	  })

  //-----  salon-setting -----
  // サロン 設定　ホーム
  .state('salon-setting-setting_home', {
	    url: '/salon/setting/setting_home',
	    templateUrl: 'salon/setting/setting_home/setting_home.html',
	    controller: 'salonSalonSettingSettingHomeControllers'
	  })

  // サロン 設定　ポイント管理
  .state('salon-setting-point_man', {
	    url: '/salon/setting/point_man',
	    templateUrl: 'salon/setting/point_man/point_man.html',
	    controller: 'salonSettingPointManControllers'
	  })

  // サロン 設定　マイプロフィール
  .state('salon-setting-salon_detail', {
	    url: '/salon/setting/salon_detail',
	    templateUrl: 'salon/setting/salon_detail/salon_detail.html',
	    controller: 'salonSettingSalonDetailControllers'
	  })

  // サロン 設定　マイプロフィールの編集
  .state('salon-setting-salon_edit', {
	    url: '/salon/setting/salon_edit',
	    templateUrl: 'salon/setting/salon_edit/salon_edit.html',
	    controller: 'salonSettingSalonEditControllers'
	  })

  // サロン 設定　ギャラリーの編集
  .state('salon-setting-gallery_edit', {
	    url: '/salon/setting/gallery_edit',
	    templateUrl: 'salon/setting/gallery_edit/gallery_edit.html',
	    controller: 'salonSettingGalleryEditControllers'
	  })
	  
  // サロン 設定　レビュー
  .state('salon-setting-review', {
	    url: '/salon/setting/review',
	    templateUrl: 'salon/setting/review/review.html',
	    controller: 'salonSettingReviewControllers'
	  })

  // サロン 設定  アカウントの設定
  .state('salon-setting-account', {
	    url: '/salon/setting/account',
	    templateUrl: 'salon/setting/account/account.html',
	    controller: 'salonSettingAccountControllers'
	  })

　// サロン 設定　基本情報の変更
  .state('salon-setting-account_edit', {
	    url: '/salon/setting/account_edit/:mode',
	    templateUrl: 'salon/setting/account_edit/account_edit.html',
	    controller: 'salonSettingAccountEditControllers'
	  })

  // サロン 設定　その他の設定
  .state('salon-setting-other_edit', {
	    url: '/salon/setting/other_edit',
	    templateUrl: 'salon/setting/other_edit/other_edit.html',
	    controller: 'salonSettingOtherEditControllers'
	  })

  // サロン 設定  利用規約
  .state('salon-setting-terms', {
	    url: '/salon/setting/terms',
	    templateUrl: 'salon/setting/terms/terms.html',
	    controller: 'salonSettingTermsControllers'
	  })

  // サロン 設定  プライバシーポリシー
  .state('salon-setting-privacy_policy', {
	    url: '/salon/setting/privacy_policy',
	    templateUrl: 'salon/setting/privacy_policy/privacy_policy.html',
	    controller: 'salonSettingPrivacyPolicyControllers'
	  })

  // サロン 設定  特定商取引
  .state('salon-setting-sclt', {
	    url: '/salon/setting/sclt',
	    templateUrl: 'salon/setting/sclt/sclt.html',
	    controller: 'salonSettingScltControllers'
	  })


  // 開発サンプル
  .state('sample-sample1', {
	    url: '/sample/sample1',
	    templateUrl: 'sample/sample1.html',
	    controller: 'sampleSamile1Controllers'
	  })

	  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
