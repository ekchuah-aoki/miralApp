angular.module('ionicImageSortable', []).directive(
    'sortable', ['$ionicGesture', '$ionicScrollDelegate',
    function ($ionicGesture, $ionicScrollDelegate) {
      return {
        restrict: 'A',
        scope: {
          draggable: '@',
          trashbox: '@',
          sorted: '&'
        	  
        },
        link: function (scope, element, attrs) {

          var settings = {
            draggable: scope.draggable ? scope.draggable : '.card',
            trashbox: scope.trashbox ? scope.trashbox : '.imgsortable_trashbox'
          };
          
          var dragging, cardSet, initialIndex, currentIndex, offsetY, offsetX, trashBox, deleteMode, deleteLockOn;

          var touchHold = function touchHold(e) {
        	  
            // Get the element we're about to start dragging
            dragging = angular.element(e.target).closest(settings.draggable);
            if (!dragging.length) dragging = null;

            if (dragging) {

              // ... code goes here ...
            	 initialIndex = currentIndex = dragging.index(settings.draggable);

            	    // offsetY is the touch position within the drag item 
            	    var position = dragging.position();
            	    offsetY = e.gesture.touches[0].clientY - position.top - element.offset().top;
            	    offsetX = e.gesture.touches[0].clientX - position.left - element.offset().left;

            	    // Switch to Absolute position at same location
            	    dragging.css({
            	        position: 'absolute',
            	        zIndex: 1000,
            	        left: position.left + 'px',
            	        top: position.top + 'px',
            	        width: dragging.outerWidth() + 'px',
            	        height: dragging.outerHeight() + 'px'
            	      }).addClass('imgsortable_dragging');

            	    // Insert a placholder element
            	    $('<div class="imgsortable_placeholder"></div>')
            	      .css( 'height', dragging.outerHeight() + 'px')
            	      .css( 'width', dragging.outerWidth() + 'px')
            	      .insertAfter(dragging);

            	    // Get the set of cards that were re-ordering with
            	    cardSet = element.find(settings.draggable + ':not(.imgsortable_dragging)');            
            	    
            	    deleteMode = false;
           	    	trashBox = null;
            	    //削除モードの場合
            	    if($(element).attr('mode')=='delete'){
            	    	deleteMode = true;

            	    	//ゴミ箱エレメントオブジェクトの取得
            	    	var srhTrashBox = element.find(settings.trashbox);            
                   	    if( srhTrashBox.length>0){
                   	    	trashBox = $(srhTrashBox[0]);
                   	    	trashBox.css("display", "");
                   	    }
            	    }

 
            }
          };
          var holdGesture = $ionicGesture.on('hold', touchHold, element);

          var touchMove = function touchMove(e) {
            if (dragging) {
              // Prevent list scrolling
              e.stopPropagation();

              // ... code goes here ...
              // May be a mouse or touch event
              var touchY = e.touches ? e.touches[0].clientY : e.clientY;
              var touchX = e.touches ? e.touches[0].clientX : e.clientX;

              // Reposition the dragged element
              var newTop = touchY - offsetY - element.offset().top;
              var newLeft = touchX - offsetX - element.offset().left;

              dragging.css('top', newTop + 'px');
              dragging.css('left', newLeft + 'px');

              if(deleteMode){
            	  //移動中アイテムの中心点
            	  var cx = newLeft + dragging.width()  / 2;
            	  var cy = newTop  + dragging.height() / 2;
            	  
            	  //ゴミ箱アイテムの中心点
            	  var tcx = trashBox.position().left  + trashBox.width()  / 2;
            	  var tcy = trashBox.position().top + trashBox.height() / 2;
            	  

            	  //console.debug('cx:'+cx + "  cy:"+cy + "  tcx:"+tcx + "  tcy:"+tcy);
            	  //中心点のござが10以下なら削除対象と認識
            	  deleteLockOn = false;
            	  if( Math.abs(cx-tcx)<=10 && Math.abs(cy-tcy)<=10){
                	  deleteLockOn = true;
            		  console.debug('delete!!!!!!!!');
            	  }
            	  
              }else{
                  // Find the current position in the list of items
                  var newIndex = -1;
                  cardSet.each(function (i) {
    	            	var t = $(this).position().top;
    	            	var l = $(this).position().left;

    	            	var wl =   Math.abs((newLeft + dragging.width() / 2) - (l + $(this).width() / 2)) ;
    	            	var wl2 =  (dragging.width() + $(this).width()) / 3;
    	            	
    	            	var hl = Math.abs((newTop + dragging.height() / 2) - (t + $(this).height() / 2));
    	            	var hl2 = (dragging.height() + $(this).height()) / 3;
    	            	
    	            	if (wl <=  wl2 && hl <= hl2){
    	            		newIndex = i;
    	            	}
    	            		
                  });

                  if (newIndex != -1 && newIndex !== currentIndex) {
	                    // Position has changed
	                    currentIndex = newIndex;
	
	                    // Move the placeholder
	                    var placeholder = element.find('.imgsortable_placeholder');
	                    if (newIndex < cardSet.length) {
	                      placeholder.insertBefore(cardSet.eq(newIndex));
	                    } else {
	                      placeholder.insertAfter(cardSet.eq(cardSet.length - 1));
	                    }
                  }
            	  
              }
            
            }
          };

          // Handle both mouse and touch gestures
          var touchGesture = $ionicGesture.on('touchmove', touchMove, element);
          var mouseGesture = $ionicGesture.on('mousemove', touchMove, element);

          var touchRelease = function touchRelease(e) {
            if (dragging) {


           // Set element back to normal
              dragging.css({
                position: '',
                zIndex: '',
                left: '',
                top: '',
                //width: ''
              }).removeClass('imgsortable_dragging');

              if(deleteMode){
            	  if(deleteLockOn){
                      dragging.remove();
                      trashBox.css("display", "none");
            	  }
              }else{
                  dragging.insertAfter(element.find('.imgsortable_placeholder'));
              }

              // Remove the placeholder
              element.find('.imgsortable_placeholder').remove();

              if (initialIndex !== currentIndex && scope.sorted) {
                // Call the callback with the instruction to re-order
                scope.$fromIndex = initialIndex;
                scope.$toIndex = currentIndex;
                scope.$apply(scope.sorted);
                
              }           
              dragging = null;
            
            }
          };
          var releaseGesture = $ionicGesture.on('release', touchRelease, element);

          // Detatch all events when destroying directive
          scope.$on('$destroy', function () {
            $ionicGesture.off(holdGesture, 'hold', touchHold);
            $ionicGesture.off(touchGesture, 'touchmove', touchMove);
            $ionicGesture.off(mouseGesture, 'mousemove', touchMove);
            $ionicGesture.off(releaseGesture, 'release', touchRelease);
          });

        }
      };
    }]);