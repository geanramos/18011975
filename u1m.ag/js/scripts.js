


$( document ).ready(function() {
	
	


	$(".conteudo").scroll(function() {
		
		var scroll = $(".conteudo").scrollTop();
		
		if (scroll > 1){
			$('.scroll').addClass( "oculto" );
		} else {
			$('.scroll').removeClass( "oculto" );
		}
		
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
			
			$("#js-hero img").css({
				width: (450 + scroll/10) + "px",
				top:  (0 + scroll/20) + "px",
				left: (1 + scroll/20) + "px"
			})
			
			
		}else{
			
			$("#js-hero img").css({
				width: (500 + scroll/3) + "px",
				top:  (0 + scroll/20) + "px",
				left: (1 + scroll/5) + "px"
			})
			

		}
		
		
	})
	
	
	var astronauta= $('#js-hero img');	
	var fundogalaxia= $('#myVideo img');	
	var layer= $('.conteudo');
	
	layer.mousemove(function(e){
		var ivalueX= (e.pageX * -1 / 30);
		var ivalueY= (e.pageY * -1 / 30);
		var cvalueX= (e.pageX * -1 / 30);
		var cvalueY= (e.pageY * -1 / 30);
		astronauta.css('transform', 'translate3d('+ivalueX+'px,'+ivalueY+'px, 0)');
		fundogalaxia.css('transform', 'translate3d('+cvalueY+'px,'+cvalueX+'px, 0)');
	});
	
	
    
        

	
	
	
	
	
	$( "#menu-solucoes li#menu-site" ).on( "click", function() {
		$("#menu-solucoes .descricao").css({
			height: (0) + "px"
		})
		$( "#menu-solucoes ul li" ).removeClass('ativo');
		$(this).addClass('ativo');
		var altura1 = $( "#menu-solucoes li#menu-site p" ).height(); 
		$("#menu-solucoes li#menu-site .descricao").css({
			height: (altura1 +40) + "px"
		})
	});
	
	$( "#menu-solucoes li#menu-seo" ).on( "click", function() {
		$("#menu-solucoes .descricao").css({
			height: (0) + "px"
		})
		$( "#menu-solucoes ul li" ).removeClass('ativo');
		$(this).addClass('ativo');
		var altura1 = $( "#menu-solucoes li#menu-seo p" ).height(); 
		$("#menu-solucoes li#menu-seo .descricao").css({
			height: (altura1 + 40) + "px"
		})
	});
	
	$( "#menu-solucoes li#menu-hotsite" ).on( "click", function() {
		$("#menu-solucoes .descricao").css({
			height: (0) + "px"
		})
		$( "#menu-solucoes ul li" ).removeClass('ativo');
		$(this).addClass('ativo');
		var altura1 = $( "#menu-solucoes li#menu-hotsite p" ).height(); 
		$("#menu-solucoes li#menu-hotsite .descricao").css({
			height: (altura1 + 40) + "px"
		})
	});
	
	$( "#menu-solucoes li#menu-landing-page" ).on( "click", function() {
		$("#menu-solucoes .descricao").css({
			height: (0) + "px"
		})
		$( "#menu-solucoes ul li" ).removeClass('ativo');
		$(this).addClass('ativo');
		var altura1 = $( "#menu-solucoes li#menu-landing-page p" ).height(); 
		$("#menu-solucoes li#menu-landing-page .descricao").css({
			height: (altura1 + 40) + "px"
		})
	});
	
	$( "#menu-solucoes li#menu-e-commerce" ).on( "click", function() {
		$("#menu-solucoes .descricao").css({
			height: (0) + "px"
		})
		$( "#menu-solucoes ul li" ).removeClass('ativo');
		$(this).addClass('ativo');
		var altura1 = $( "#menu-solucoes li#menu-e-commerce p" ).height(); 
		$("#menu-solucoes li#menu-e-commerce .descricao").css({
			height: (altura1 + 40) + "px"
		})
	});
	
	$( "#menu-solucoes li#menu-app" ).on( "click", function() {
		$("#menu-solucoes .descricao").css({
			height: (0) + "px"
		})
		$( "#menu-solucoes ul li" ).removeClass('ativo');
		$(this).addClass('ativo');
		var altura1 = $( "#menu-solucoes li#menu-app p" ).height(); 
		$("#menu-solucoes li#menu-app .descricao").css({
			height: (altura1 + 40) + "px"
		})
	});
	
	$( "#menu-solucoes li#menu-wordpress" ).on( "click", function() {
		$("#menu-solucoes .descricao").css({
			height: (0) + "px"
		})
		$( "#menu-solucoes ul li" ).removeClass('ativo');
		$(this).addClass('ativo');
		var altura1 = $( "#menu-solucoes li#menu-wordpress p" ).height(); 
		$("#menu-solucoes li#menu-wordpress .descricao").css({
			height: (altura1 + 40) + "px"
		})
	});
	
	
	var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	if (is_safari){
		var $posicaosecao0 =  $("#secao0").offset().top -80
		var $posicaosecao1 =  $("#secao1").offset().top -80
		var $posicaosecao2 =  $("#secao2").offset().top -80
		var $posicaosecao3 =  $("#secao3").offset().top -80
		var $posicaosecao4 =  $("#secao4").offset().top -80
	}else{
		var $posicaosecao0 =  $("#secao0").offset().top
		var $posicaosecao1 =  $("#secao1").offset().top
		var $posicaosecao2 =  $("#secao2").offset().top
		var $posicaosecao3 =  $("#secao3").offset().top
		var $posicaosecao4 =  $("#secao4").offset().top
	}
		
	
	
	$( window ).resize(function() {
		var $posicaosecao0 =  $("#secao0").offset().top
		var $posicaosecao1 =  $("#secao1").offset().top
		var $posicaosecao2 =  $("#secao2").offset().top
		var $posicaosecao3 =  $("#secao3").offset().top
		var $posicaosecao4 =  $("#secao4").offset().top
	});
	
	
	$( ".logo" ).on( "click", function() {
		$('.conteudo').animate({
		   	scrollTop: $posicaosecao0	
		}, 'slow');
	});	

	
	
	$( ".menu-home" ).on( "click", function() {
		$('.menu-overlay').toggleClass( "ativo" );
		//alert($posicaosecao1);
		$('.conteudo').animate({
		   	scrollTop: $posicaosecao0	
		}, 'slow');
	});	
	
	$( ".menu-nos" ).on( "click", function() {
		$('.menu-overlay').toggleClass( "ativo" );
		//alert($posicaosecao1);
		$('.conteudo').animate({
		   	scrollTop: $posicaosecao1	
		}, 'slow');
	});	
	
	$( ".menu-solucoes" ).on( "click", function() {
		$('.menu-overlay').toggleClass( "ativo" );
		$('.conteudo').animate({
		   	scrollTop: $posicaosecao2
		}, 'slow');
	});	
	
	$( ".menu-clientes" ).on( "click", function() {
		$('.menu-overlay').toggleClass( "ativo" );
		$('.conteudo').animate({
		   	scrollTop: $posicaosecao3
		}, 'slow');
	});	
	
	$( ".menu-contato" ).on( "click", function() {
		$('.menu-overlay').toggleClass( "ativo" );
		$('.conteudo').animate({
		   	scrollTop: $posicaosecao4
		}, 'slow');
	});	
	
	
	$('.menu').click(function() {
        $('.menu-overlay').toggleClass( "ativo" );
    });
	
});

