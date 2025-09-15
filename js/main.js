$(function(){
    let header=$("#header");
    let header_top=$("#header_top");
    let headerH=header.height();
    let scrollPos=$(window).scrollTop();
    let nav=$("#nav");
    let navToggle=$("#navToggle");
    

    $(window).on("scroll",function(){
        scrollPos=$(this).scrollTop();
        if (scrollPos>headerH){
            header_top.addClass("fixed");
        }
        else{
            header_top.removeClass("fixed");
        }
    });
    /*smoth croll*/
    $("[data-scroll]").on("click",function(event){
        event.preventDefault();
        let elementId=$(this).data('scroll');
        let elementOffset=$(elementId).offset().top;
        // nav.removeClass("show");

        $("html, body").animate({
            scrollTop:elementOffset -70
        });
    })


    /*Nav Toggle*/
    navToggle.on("click", function(event) {
      event.preventDefault();
      nav.toggleClass("show");
  });
  



















});