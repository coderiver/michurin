$(document).ready(function() {

	// masonry
	  $(document).ready(function(){
	    $('#js-masonry').masonry({
	// указываем элемент-контейнер в котором расположены блоки для динамической верстки
	      itemSelector: '.item',
	// указываем класс элемента являющегося блоком в нашей сетке
	          singleMode: false,
	// true - если у вас все блоки одинаковой ширины
	      isResizable: true,


	// опции анимации - очередь и продолжительность анимации
	    });
	  });

	var $container = $('#js-masonry');

	$container.imagesLoaded( function(){
	  $container.masonry({
	    itemSelector : '.item'
	  });
	});


	////////////////////////////////////// MENU ACCORDION //////////////////////////

	$(document).ready(function(){
	     $(".js-accordion div").hide();

	    $(".js-accordion h3").click(function(){
	    	if ($(this).hasClass('is-active')) {
	    		$('.js-accordion h3').removeClass('is-active');
	    		$(this).next("div").slideUp();
	    	}
	    	else {
	    		$('.js-accordion h3').removeClass('is-active');
	    		$(this).addClass('is-active');
	    		$('.js-accordion div').slideUp();
	    		$(this).next("div").slideDown("slow");
	    	}
	     });
	 });


});