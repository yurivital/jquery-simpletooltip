/*
 * Create simple html/css tooltip
 *
 * @name		simpleTooltip
 * @author		Yuri VITAL
 * @contact		vital.systm@gmail.com
 * @version		0.3
 * @date		Dec 21 2011
 * @type    	jQuery
 * @licence     Public domain
 * @example  
 *
 *   * Place icon images < img src="test.png" class="jTooltip" href="#targetedDiv" />
 *   * Create a div with an ID corresponding with the href value  <div id="targetedDiv" style="display: none" class="tooltip" > ....  </div>
 *   * Create a CSS class for formating the div element 
 *    .tooltip {
	position: absolute;
	z-index: 99999;
	border: 1px solid #ccc;
	background-color: #fff;
	padding: 5px;
	width : 200px;
	text-align :left;
}
 
* Create tooltip
  $('.jTooltip').simpleTooltip();

*/

(function ($) {
var methods = {
 init : function(){

        return this.each(function(){

                // Apparition du div
                jQuery(this).bind('mouseenter', function() {
                        var target = jQuery(this).attr("href");
                        var content = jQuery(target).html();
                        var pos = jQuery(this).position();
                        jQuery(target).css({ position: "absolute", top: (pos.top + 20), left: (pos.left +15 ) });
                        jQuery(target).show();
                });
                
                jQuery(this).bind('mouseout', function() {
                        var target = jQuery(this).attr("href");
                        jQuery(target).hide();
                });
         });
 
 }
 ,
 destroy : function(){
  return this.each(function(){
     jQuery(this).unbind('mouseenter'); 
     jQuery(this).unbind('mouseout');
     });
 }
};

$.fn.simpleTooltip = function (method){


   if(methods[method]){
      return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
      
   }else if( typeof method === 'object' || !method){
   
    return methods.init.apply(this,arguments);
   }
   else
   {
    jQuery.error('Method ' + method + ' does not exist on jQuery.simpleTooltip');
   }

    };
})(jQuery);