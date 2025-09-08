$(function(){
    let header=$("#header");
    let header_top=$("#header_top");
    let headerH=header.height();
    let scrollPos=$(window).scrollTop();
    
    

    $(window).on("scroll",function(){
        scrollPos=$(this).scrollTop();
        if (scrollPos>headerH){
            header_top.addClass("fixed");
        }
        else{
            header_top.removeClass("fixed");
        }
    });
    







});