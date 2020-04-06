(function($) {
  "use strict"; 

  // site-bar
  $(".bar_btn").click(function(){
    $('.site-bar').toggleClass('siteBar_active')
  })

  /* magnificPopup video view */
  $(".mfp-play").magnificPopup({
    type: "iframe"
  }); 
  // feture_slider
  $(".feture-slider ").owlCarousel({
    loop: true,
    margin: 30,
    items: 3, 
    nav: false,
    dots: true,
    autoplay:true,
    responsive: {
      0: {
        items: 1,
        dots: false
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  }); 
})(jQuery);
