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


	$('.js-select-list').hide();
	$(document).click(function() {
		$(".js-select-list").hide();
		$(".js-select").removeClass("is-active");
	}); 

	function select() {
		$(".js-select").each(function(){
		var select_list = $(this).parent().find(".js-select-list");
		var text = select_list.find("li").first().text();
			$(this).find(".js-select-text").text(text);
			$(this).click(function(event){

				if ($(this).hasClass("is-active")) {
					$(this).removeClass("is-active");
					select_list.hide();
				}
				else {
					$(".js-select").removeClass("is-active");
					$(".js-select-list").hide();
					select_list.show();
					$(this).addClass("is-active");
				}
				event.stopPropagation();
		});
	select_list.find("li").click(function(event) {
		var id = $(this).attr("data-id");
		var text = $(this).text();
			$(this).parent().parent().find(".js-select-text").text(text);
			$(this).parent().parent().find(".js-select-input").val(id);
			$(this).parents('.js-select-list').hide();
			$(this).parents(".js-select").removeClass("is-active");
			event.stopPropagation();
			});
		});
	}
	select();

	$('.js-select').click(function(event){
	event.stopPropagation();
	}); 

	
	  $('.scrollblock,.js-select-list').jScrollPane(
		{
			hideFocus: true, 
			showArrows: true
			}
		);


	
	


	 $('.js-goto2').click(function(){
	 	$('#popup2').hide();
	 	$('#popup1').show();
	 })
	 $('.js-goto1').click(function(){
	 	$('#popup1').hide();
	 	$('#popup2').show();
	 })

	 var availableTags = [
		"Москва",
		"Санкт-Петербург",
		"Волгоград",
		"Новосибирск",
		"Екатеринбург",
		"Нижний Новгород",
		"Казань",
		"Самара",
		"Омск"
		];
	$( "#tags" ).autocomplete({
	source: availableTags
	});
	 
});