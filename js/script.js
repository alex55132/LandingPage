var descContainerDisplay = $(".descContainer").css("display");
		console.log(descContainerDisplay);

		$.fn.isInViewport = function() {
  			var elementTop = $(this).offset().top;
  			var elementBottom = elementTop + $(this).outerHeight();

  			var viewportTop = $(window).scrollTop();
  			var viewportBottom = viewportTop + $(window).height();

  			return elementBottom > viewportTop && elementTop < viewportBottom;
		};

		function changeDescription (title, message) {

				var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

				var timeToFade = 0;
				var customHeight = 0;

				if (screenWidth < 768) {
					customHeight = "425px"; 
				} else {
					customHeight = "237px";
				}

				if ($('.descContainer').css("opacity") == 0) {
					timeToFade = 10;
				} else {
					timeToFade = 1000;
				}

				$(".descContainer").css("display", "flex");

				$('.descContainer').animate({
					width: 0,
					opacity: 1
				}, timeToFade, function() {
					$('.descTitle').text(title);
					$('.descText').text(message);

					$('.descContainer').animate({
						width: '100%',
						height: customHeight
					}, 1000, function() {
						console.log('Tecnicamente se ha animado');
					});
					//Hacemos scroll para mostrar la descripcion en pantalla
					$('html, body').animate({
            				scrollTop: $("#descContainer").offset().top
            			}, 1500);
				});
		}

		$(document).ready(function() {

			$(".descContainer").css("display", "none");

			//Animaciones de scroll

            $("#QuienesSomos").click(function(){
            	$('html, body').animate({
                    scrollTop: 0
                }, 1000);
            })

            $("#Servicios").click(function (){
                $('html, body').animate({
                    scrollTop: $("#ServiceMark").offset().top
                }, 1000);
            });

            $("#Contacto").click(function() {
            	$('html, body').animate({
            		scrollTop: $("#BtnContacto").offset().top
            	}, 1000);
            });

			//Animacion del primer container
			var descriptionMargin = document.getElementById('textoPresentacion').style.marginLeft;
			$('#textoPresentacion').css("margin-left", '-155%');
			$("#MainTitle").animate({
				opacity: '1'
			}, 1500, function() {
				//Animación completa
				 $("#textoPresentacion").animate({
					'marginLeft': ""
				}, 500);
			});
			var contactAnimated = false;
			var serviceAnimated = false;
			//Función para comprobar el si se ha hecho la animación
			$(window).on('resize scroll', function() {
				if(!serviceAnimated) {
					if($('.ServiceSectionContainer').isInViewport()) {
						//Hacemos la animación del segundo container
						$(".ServiceSectionHeader").animate({
							opacity: 1
						}, 1500, function() {
							$(".iconImg").animate({
							opacity: 1
						}, 2500);
						});

						$(".ServiceSectionDesc").animate({
							opacity: 1
						}, 1700);

						serviceAnimated = true;
					}
				}
				if(!contactAnimated) {
					if($('.contactContainer').isInViewport()) {
						//Animamos la aparición del botón
						$(".contactContainer").animate({
							opacity: 1
						}, 1500);

						contactAnimated = true;
					}
				}
			});

			var descTextsArray = [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus, ligula at laoreet elementum, mauris arcu rutrum ligula, sit amet convallis ipsum nisl nec diam. Aenean sit amet iaculis leo, sodales facilisis dui. Maecenas tincidunt dapibus dui, efficitur imperdiet arcu. Maecenas non lorem nec sapien ullamcorper sagittis non quis ante. Morbi id magna vitae lectus mollis blandit ac non ligula. Sed condimentum at sem eleifend sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque luctus risus sit amet magna hendrerit laoreet.",
				"Segundo loreeem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus, ligula at laoreet elementum, mauris arcu rutrum ligula, sit amet convallis ipsum nisl nec diam. Aenean sit amet iaculis leo, sodales facilisis dui. Maecenas tincidunt dapibus dui, efficitur imperdiet arcu. Maecenas non lorem nec sapien ullamcorper sagittis non quis ante. Morbi id magna vitae lectus mollis blandit ac non ligula. Sed condimentum at sem eleifend sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque luctus risus sit amet magna hendrerit laoreet.",
				"Tercer loreeem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus, ligula at laoreet elementum, mauris arcu rutrum ligula, sit amet convallis ipsum nisl nec diam. Aenean sit amet iaculis leo, sodales facilisis dui. Maecenas tincidunt dapibus dui, efficitur imperdiet arcu. Maecenas non lorem nec sapien ullamcorper sagittis non quis ante. Morbi id magna vitae lectus mollis blandit ac non ligula. Sed condimentum at sem eleifend sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque luctus risus sit amet magna hendrerit laoreet."
			];

			$('.icon1').on('click', function() {
			 	changeDescription("Servicio 1", descTextsArray[0]);
			});
			$('.icon2').on('click',function() {
				changeDescription("Servicio 2", descTextsArray[1]);
			});
			$('.icon3').on('click',function() {
				changeDescription("Servicio 3", descTextsArray[2]);
			});

		});