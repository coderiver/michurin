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
	// перестраивает блоки при изменении размеров окна
	      isAnimated: true,
	// анимируем перестроение блоков
	          animationOptions: {
	          queue: false,
	          duration: 500
	      }
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
	    $(".js-accordion h3:first").addClass("active");
	    $(".js-accordion div:not(:first)").hide();

	    $(".js-accordion h3").click(function(){

	        $(this).next("div").slideToggle("slow")
	        .siblings("div:visible").slideUp("slow");
	        $(this).toggleClass("active");
	        $(this).siblings("h3").removeClass("active");
	     });
	 });


});