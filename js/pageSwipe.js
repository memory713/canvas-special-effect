(function($){
	var pageSwitch = (function(){
		function pageSwitch(element,options){
			
		} 
	})();
	$.fn.pageSwitch = function(options){
		return this.each(function(){
			var me = $(this),
				instance = me.data.("pageSwitch");
			if(!instance){
				instance = new pageSwitch(me,options)
				me.data('pageSwitch',instance)
			}
		})

	}
	$.fn.pageSwitch.default = {
		selectors:{
			sections:'.sections',
			section:'.section',
			page:'.pages',
			active:'.active',
		},
		index:0,
		easing:'ease',
		duration:500,
		loop:false,
		pagination:true,
		keyboard:true,
		diraction:'vertival',
		callback:"",
	}
})(jQuery)