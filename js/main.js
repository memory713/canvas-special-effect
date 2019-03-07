requirejs.config({
	path:{
		jquery:'jquery-1.11.2.min'
	}
	
})
requirejs(['jquery','validate'],function($,validate){
	$('.emmmm').css('background-color','red');
	console.log(validate.isEqual(1,2))
});