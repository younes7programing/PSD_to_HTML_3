$(document).ready(function(){


	var hamburger =$(".mainNav p a");

	hamburger.on("click", function(){
		$(".mainNav ul li").stop(true, true).slideToggle(500);
		$(".mainNav #humbourger i").toggleClass('fa-bars fa-times ');
			$(".mainNav").toggleClass("transpBkg");
	});


});


