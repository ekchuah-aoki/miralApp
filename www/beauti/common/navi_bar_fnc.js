/**
 * 
 */
function miral.beauti.common.navi_bar.foward($state, pageid){
	var transition = $timeout(function(){
		$state.go(pageid,null,'');
	});
}