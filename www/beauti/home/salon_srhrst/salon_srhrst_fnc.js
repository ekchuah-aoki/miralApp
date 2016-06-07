angular.module('miral.beauti.home.salon_srhrst.salon_srhrst_fnc', ['miral.common.miralConst'
                                         ,'miral.common.googleAppenginConnecter'
                                         ])

                                         
.factory('beautiHomeSalonSrhrstSalonSrhrstFnc', function(googleAppenginConnecter) {
	
	var myself = {
		
		////////////////////////////////////////////////
		srhSalon:function(keyword_, pos_, limit_, success_, fail_){
			
			reqMsg = {keyword:keyword_
					,pos:pos_
					,limit:limit_};
			
			googleAppenginConnecter.execute(
					gapi.client.miralServer.salon.salonqueryservice.srhbykeyword,
					success_,
					fail_,
					reqMsg
					)
		}
		
	};
	
	return myself;
})

;


