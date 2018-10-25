
function Do_It() { 
	$(".d6").each(function(){
		var random_number = Math.floor(Math.random() * (6))+1;
		$(this).removeClass("pip_1 pip_2 pip_3 pip_4 pip_5 pip_6").addClass("pip_"+random_number);
	});
}