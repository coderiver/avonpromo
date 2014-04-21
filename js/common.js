$(document).ready(function() {
	$('.code input').keyup(function(e){
			if((e.keyCode > 64 && e.keyCode < 91) || (e.keyCode > 47 && e.keyCode < 58)) {
				$(this).next('input').focus();
			}
		});
});