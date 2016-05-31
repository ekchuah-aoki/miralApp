angular.module('miral.common.trainroute_chooser.trainroute_chooser_fnc', ['miral.common.miralConst'
                                         ,'miral.common.googleAppenginConnecter'
                                         ])

                                         
.factory('commonTrainrouteChooserTrainrouteChooserFnc', function(googleAppenginConnecter) {
	
	var myself = {
			
			////////////////////////////////////////////////
			//沿線取得
			getTrainList:function(pos_, limit_, success_, fail_){
				
				//pos:開始位置1〜、limit:取得数
				reqMsg = {pos:pos_, limit:limit_};
				
				googleAppenginConnecter.execute(
						gapi.client.miralServer.common.trainmasterservice.gettrainlist,
						success_,
						fail_,
						reqMsg
						)
			},
			srhStationList:function(keyword_, success_, fail_){
				
				reqMsg = {keyword:keyword_};
				
				googleAppenginConnecter.execute(
						gapi.client.miralServer.common.trainmasterservice.srhstationlist,
						success_,
						fail_,
						reqMsg
						)
			}
			
		};
		
		return myself;
	})

	;


