

$(".mega-toggle").unbind('click').bind('click', function (e) {
  element = "#" + $(this).attr('aria-controls');
  active = $(element).hasClass('is-active');
  console.log(element);

  if(active){
      console.log('Class present');
      $('.mega-nav--bg').attr("style","--h:0, --hpx:0");
      anime({
        targets: '.mega-item',
        opacity: 0,
        duration: 300,
        easing: 'easeInOutSine'
      });

      animation = anime({
        targets: '.mega-nav',
        opacity: 0,
        translateX: '1rem',
        duration: 1000,
        easing: 'easeInOutSine'
      });
      
      $(".mega-item").removeClass('is-active');
      $(".mega-nav--backdrop").removeClass('is-active');

      animation.reverse();
    }
    else{
      anime({
        targets: '.mega-item',
        opacity: 0,
        duration: 300,
        easing: 'easeInOutSine'
      });
      anime({
        targets: '.mega-nav',
        opacity: 0,
        duration: 0,
        easing: 'easeInOutSine'
      });

      $('.mega-nav--bg').attr("style","--h: 444.5; --hpx: 444.5px");
      $(".mega-item").removeClass('is-active');

      $(element).addClass('is-active');
      anime({
        targets: element,
        opacity: 1,
        duration: 300,
        easing: 'easeInOutSine'
      });
      $(".mega-nav--backdrop").addClass('is-active');
      console.log('Class not present');
      anime({
        targets: '.mega-nav',
        opacity: 1,
        duration: 1000,
        easing: 'easeInOutSine'
      });

    }
});


    
$(".mega-nav--backdrop").click(function(){
  console.log("click backdrop");
  anime({
    targets: '.mega-item',
    opacity: 0,
    duration: 300,
    easing: 'easeInOutSine'
  });
  animation = anime({
    targets: '.mega-nav',
    opacity: 0,
    translateX: '1rem',
    duration: 1000,
    easing: 'easeInOutSine'
  });
  animation.reverse();
  $('.mega-nav--bg').attr("style","--h:0, --hpx:0");
  $(".mega-item").removeClass('is-active');
  $(".mega-nav--backdrop").removeClass('is-active');
});


$(".dropdown--toggle").click(function(){

  element = $(this).parent().find("#" + $(this).attr('aria-controls'));
  if(element.height() == 0){
    element.height('auto');

    anime({
      targets: "#" + $(this).attr('aria-controls'),
      opacity: 1,
      css: {
        height: 'auto',
      },
      duration: 1000,
      easing: 'easeInOutSine'
    });
  }
  else{
    element.height('0');

    anime({
      targets: "#" + $(this).attr('aria-controls'),
      opacity: 0,
      css: {
        height: '0',
      },
      duration: 1000,
      easing: 'easeInOutSine'
    });
  }

  
});


$(".cart-toggle").click(function(){
  console.log("Cart Click!")
  // anime({
  //   targets: '.cart',
  //   translateX: '0%',
  //   duration: 400,
  //   easing: 'easeInOutSine'
  // });
  
});

$(".cart-close").click(function(){
  console.log("Cart Click close!")
  anime({
    targets: '.cart',
    translateX: '100%',
    duration: 400,
    easing: 'easeInOutSine'
  });
  
});


$("div.main-navigation--mobile div button.menu-toggle").click(function(){
  console.log("Cart Click!", $('.menu-mobile').css('transform'))
  $(this).toggleClass('is-open')
  if( $('.menu-mobile').css('transform') == 'matrix(1, 0, 0, 1, 0, 0)' ) {
    nav_animation = anime({
      targets: '.menu-mobile',
      translateX: '-100%',
      duration: 400,
      easing: 'easeInOutSine'
    });

    animation = anime({
      targets: '.mega-nav',
      opacity: 0,
      translateX: '1rem',
      duration: 1000,
      easing: 'easeInOutSine'
    });
    animation.reverse();
    $(".mega-item").removeClass('is-active');
    $(".mega-nav--backdrop").removeClass('is-active');

 } else {
  $(".mega-nav--backdrop").addClass('is-active');
    animation = anime({
      targets: '.menu-mobile',
      translateX: '0%',
      duration: 400,
      easing: 'easeInOutSine'
    });
 }


  
});

