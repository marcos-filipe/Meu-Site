$(function(){
	/*************** CLICK G0 *********************/
	$('.header-menu a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;

		$('html,body').animate({'scrollTop':offSetTop},1000);
		
		return false;
	
	});


	$('.menu-mobile a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;

		$('.btn-close').css('display','none');
		$('.menu-mobile').animate({right: '-500px'});
		$('.img-menu').css('display','block');

		$('html,body').animate({'scrollTop':offSetTop},1000);

		return false;
	
	});

	/*************** ANIMATE BORDER *********************/

	$(window).scroll(function(){
		var windowY = $(this).scrollTop();
		if(windowY > 1){
			$('.menu-logo').css('background-color','#0984e3');
		
		}else{
			$('.menu-logo').css('background','none');
		}


		if(windowY > 230){
			$('.sobre').css('border-bottom','2px solid white');
		
		}else{
			$('.sobre').css('border-bottom','0');
		}

		if(windowY > 1244){
			$('.sobre').css('border-bottom','0');
			$('.certificados').css('border-bottom','2px solid white');
		
		}else{
			$('.certificados').css('border-bottom','0');
		}

		if(windowY > 2489){
			$('.certificados').css('border-bottom','0');
			$('.projetos').css('border-bottom','2px solid white');
		
		}else{
			$('.projetos').css('border-bottom','0');
		}

		if(windowY > 3951){
			$('.projetos').css('border-bottom','0');
			$('.contatos').css('border-bottom','2px solid white');
		
		}else{
			$('.contatos').css('border-bottom','0');
		}

	});


/*************** MENU-MOBILE *********************/

	$('.img-menu').click(function(){
		$('.menu-mobile').animate({right: '0'},1000);
		$('.menu-mobile').css('display','block')
		$('.btn-close').css('display','block');
		$('.img-menu').css('display','none');

				
	});

	$('.btn-close').click(function(){
		$('.menu-mobile').animate({right: '-2000px'},1000);
		$('.btn-close').css('display','none');
		$('.img-menu').css('display','block');

		
	});


	
});


