$(document).ready(function() {
	$('.code input').keyup(function(e){
			if((e.keyCode > 64 && e.keyCode < 91) || (e.keyCode > 47 && e.keyCode < 58)) {
				$(this).next('input').focus();
			}
		});

	$('.codeform').submit(function(event) {
		if($('.input-code').val()==''){
			$(this).addClass('is-error')
			return false;
		}
		else{
			$(this).removeClass('is-error')
		}
		
	});
	$('.faq__all dt').click(function(event) {
		$(this).parent().toggleClass('is-active')
	});
	$('.faq__close').click(function(event) {
		$('.overlay,.faq').hide();
	});
});