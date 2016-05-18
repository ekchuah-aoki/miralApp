angular.module('miral.common.miralConst', [])

//曜日
.constant('WEEK', {
	man:0,
	tues:1,
	wednes:2,
	thurs:3,
	fri:4,
	satur:5,
	sun:6,
	holi:9
})

//ログインモード
.constant('LOGIN_TYPE', {
	facebook:1,
	instagram:2,
	twitter:3,
	googleplus:4,
	miralAccount:9
})
//アカウント種別
.constant('ACCOUNT_TYPE', {
	beauti:1,
	salon:2
})

//アカウント設定モード
.constant('ACCOUNT_SETTING_MODE', {
	add:1,  		//新規
	modify:2        //編集
})

//有無
.constant('UMU_FLG', {
	ari:1,
	nashi:2
})

//ログイン状態
.constant('LOGIN_STATE', {
	logined:1,
	newAccount:2,
	temporary:3,  //仮登録中
	logout:4
})                                         

//メッセージタイプ
.constant('MSG_TYPE', {
	matching:1,			//マッチング依頼
	reservation:2,		//予約
	inquiry:3			//問合せ
})                                         


//都道府県
.constant('PREFECTURE', {

    hokkaidou : {code:1, name:"北海道"},
    aomori : {code:2, name:"青森"},
    iwate : {code:3, name:"岩手"},
    miyagi : {code:4, name:"宮城"},
    akita : {code:5, name:"秋田"},
    yamagata : {code:6, name:"山形"},
    hukushima : {code:7, name:"福島"},
    ibaraki : {code:8, name:"茨城"},
    tochigi : {code:9, name:"栃木"},
    gunma : {code:10, name:"群馬"},
    saitama : {code:11, name:"埼玉"},
    chiba : {code:12, name:"千葉"},
    tokyo : {code:13, name:"東京"},
    kanagawa : {code:14, name:"神奈川"},
    niigata : {code:15, name:"新潟"},
    toyama : {code:16, name:"富山"},
    ishikawa : {code:17, name:"石川"},
    fukui : {code:18, name:"福井"},
    yamanashi : {code:19, name:"山梨"},
    nagano : {code:20, name:"長野"},
    gifu : {code:21, name:"岐阜"},
    shizuoka : {code:22, name:"静岡"},
    aichi : {code:23, name:"愛知"},
    mie : {code:24, name:"三重"},
    shiga : {code:25, name:"滋賀"},
    kyoto : {code:26, name:"京都"},
    osaka : {code:27, name:"大阪"},
    hyogo : {code:28, name:"兵庫"},
    nara : {code:29, name:"奈良"},
    wakayama : {code:30, name:"和歌山"},
    tottori : {code:31, name:"鳥取"},
    shimane : {code:32, name:"島根"},
    okayama : {code:33, name:"岡山"},
    hiroshima : {code:34, name:"広島"},
    yamaguchi : {code:35, name:"山口"},
    tokushima : {code:36, name:"徳島"},
    kagawa : {code:37, name:"香川"},
    ehime : {code:38, name:"愛媛"},
    kouchi : {code:39, name:"高知"},
    hukuoka : {code:40, name:"福岡"},
    saga : {code:41, name:"佐賀"},
    nagasaki : {code:42, name:"長崎"},
    kumamoto : {code:43, name:"熊本"},
    oita : {code:44, name:"大分"},
    miyazaki : {code:45, name:"宮崎"},
    kagoshima : {code:46, name:"鹿児島"},
    okinawa : {code:47, name:"沖縄"}
})


;


