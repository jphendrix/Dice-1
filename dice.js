/*
 * global variables to hold statistics about previous rolls.
 * Later I will show you a better way of doing this using
 * arrays
 */
var _count_1 = 0;
var _count_2 = 0;
var _count_3 = 0;
var _count_4 = 0;
var _count_5 = 0;
var _count_6 = 0;
var _count_total = 0;

function Do_It() { 
	$(".d6").each(function(){
		var random_number = Math.floor(Math.random() * (6))+1;
		
		_count_total = _count_total + 1;
		
		//Later I will show you a better way of doing this using a switch statement
		if(random_number == 1){
			//increment the count by 1
			_count_1 = _count_1 + 1;
			$(".count_1").html(_count_1);
		}
		
		if(random_number == 2){
			//increment the count by 1
			_count_2 = _count_2 + 1;
			$(".count_2").html(_count_2);
		}
		
		//TODO:
		//Continue these "if" statements _count_3 through _count_6
		
		$(".count_total").html(_count_total);
		
		$(this).removeClass("pip_1 pip_2 pip_3 pip_4 pip_5 pip_6").addClass("pip_"+random_number);
	});
}