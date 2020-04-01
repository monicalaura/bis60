$(document).ready(function () {

 //toggler btn
  $('.navbar-toggler').click(function () {

    $('.navbar-toggler').toggleClass('change')
      
  });

   //sticky navbar
   $(window).scroll(function () { 

    let position = $(this).scrollTop();

    if(position>= 718){
       $('.navbar').addClass('nav-anim');
       $('.navbar').addClass('fixed-top');
    }
    else{
      $('.navbar').removeClass('nav-anim');
       $('.navbar').removeClass('fixed-top');
    }
     
   });

   //smooth scroll
   $('.nav-item a, .header-link, .footer-link, .about-btn, .bis-btn').click(function(link){
    link.preventDefault();
    let target = $(this).attr('href');

    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 25
    },2000)

   })

   //back to top

   $(window).scroll(function () { 

    let position = $(this).scrollTop();

    if(position>= 718){
       $('.footer-link').addClass('scrollTop');    
    }
    else{
      $('.footer-link').removeClass('scrollTop');
    }
     
   });


    //ripples effect
    $("#header, .info").ripples({
        dropRadius: 18,
        perturbance: 0.2,
        
      });

      //magnific popup
      $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
          enabled: true
        }
      });
});
