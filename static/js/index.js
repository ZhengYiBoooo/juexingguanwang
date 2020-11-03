//服务项目
$(function() {
    $('.one').mouseenter(function() {
        $(this).find(".im").stop(true, true).hide(500);

        //  $(".im").mouseenter(function(){
        // $(this).hide(500);
        // }); 

        //  $(".hid").focus(function(){
        $(this).find(".hid").stop(true, true).delay(300).animate({
            height: 80
        }, 500);
        // });
        // 
        //  $(".top").focus(function(){
        $(this).find(".top").stop(true, true).animate({
            fontSize: "24px",
            top: "50px",

        }, 400);
        // });
        // // 
        //  $(".second").focus(function(){
        $(this).find(".second").stop(true, true).animate({
        	fontSize: "14px",
            width: "80px",
            top: "60px",
        }, 400);
        // });
        // 
        // $(".links").mouseenter(function(){
        $(this).find(".links").stop(true, true).delay(300).animate({
            height: "show",
            opacity: 1
        }, 500);
        // });

    });

    $('.one').mouseleave(function() {
        $(this).find(".im").stop(true, true).show(500);
        // $(".im").mouseleave(function(){  
        // $(this).delay(800).show(500);
        // });

        // $(".hid").focus(function(){  
        $(this).find(".hid").stop(true, true).animate({
            height: 0
        }, 500);
        //  });
        //  
        //  $(".top").focus(function(){ 
        $(this).find(".top").stop(true, true).delay(600).animate({
            fontSize: "28px",
            top: "70px"
        }, 500);
        //  });
        //  // 
        //  $(".second").focus(function(){
        $(this).find(".second").stop(true, true).delay(600).animate({
            width: "100px",
            top: "80px"
        }, 500);
        //  });
        // 
        // $(".links").mouseleave(function(){
        $(this).find(".links").stop(true, true).animate({
            height: "hide",
            opacity: 0
        }, 0);
        // });

    });

})