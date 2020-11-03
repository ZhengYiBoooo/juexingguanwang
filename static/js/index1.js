// JavaScript Document






/********二级导航********/

$( document ).ready( function()

{

var h=0;

	$( '.erjinav_box' ).height( $( '.banner' ).height() + 12 )



	$( window ).resize( function()

	{

		$( '.erjinav_box' ).height( $( '.banner' ).height() + 12 )

	} )



	$( '.ej' ).hover( function()

	{

		h=0;

		$( '.ej' ).removeClass( 'ej_on' );

		$( this ).addClass( 'ej_on' );

		var er = $( this ).attr( 'id' );

			

		

		setTimeout(function(){

		if(h==0){

$( '.erjinav_box' ).stop( true ).fadeIn( 0 );

		$( '.erjinav' ).stop( true).animate( { height: "0" }, 100, 'easeInQuad', function()

		{

			$( '.erjinav' ).eq( er ).stop(true).delay(500).animate( { height: "100%" }, 600, 'easeInQuad' );

		} )

		return;

		}

		},300)

		

		



	}, function()

	{



		/*$( '.erjinav' ).stop( true ).animate( { height: "0%" }, 400, 'easeInQuad', function()

		{

			$( '.erjinav_box' ).stop( true ).fadeOut( 0 );

		} );

		$( '.ej' ).removeClass( 'ej_on' );*/

	} )



	$( '.header' ).hover( function()

	{



	}, function()

	{

    h=1;

	$( '.erjinav' ).stop( true ).animate( { height: "0%" }, 400, 'easeInQuad', function()

		{

			$( '.erjinav_box' ).stop( true ).fadeOut( 0 );

		} );

		$( '.ej' ).removeClass( 'ej_on' );



		

	} )





} );



/********二级导航********/



/**********pro********/

$( document ).ready( function()

{



	$( '.pro_box>ul>li' ).width( $( '.pro_box' ).width() / 1.8 );

	var proW = $( '.pro_box>ul>li' ).width();

	var proS = $( '.pro_box>ul>li' ).size();

	$( '.pro_box>ul' ).width( proW * proS + 1000 );

	$( '.pro_box>ul' ).css( "left", -proW * 0.6 );



	$( '.pro_box>ul>li' ).eq( 1 ).find( '.pro_bg' ).fadeOut( 600 );



	$( window ).resize( function()

	{



	} )



	$( '.pro_next,.title1 span' ).click( function()

	{



		$( '.pro_box>ul' ).stop( true, true ).animate( { marginLeft: -proW }, 800, function()

		{

			$( '.pro_box>ul' ).find( 'li:first-child' ).appendTo( $( '.pro_box>ul' ) );

			$( '.pro_box>ul' ).css( { marginLeft: 0 } );

		} )

		$( '.pro_box>ul>li' ).find( '.pro_bg' ).fadeIn( 600 );

		$( '.pro_box>ul>li' ).eq( 2 ).find( '.pro_bg' ).fadeOut( 600 );

	} )

	$( '.pro_prev' ).click( function()

	{

		$( '.pro_box>ul' ).stop( true, true ).animate( { marginLeft: -proW }, 0, function()

		{

			$( '.pro_box>ul' ).find( 'li:last-child' ).prependTo( $( '.pro_box>ul' ) );

			$( '.pro_box>ul' ).stop( true, true ).animate( { marginLeft: 0 }, 800 );

			$( '.pro_box>ul>li' ).find( '.pro_bg' ).fadeIn( 600 );

			$( '.pro_box>ul>li' ).eq( 1 ).find( '.pro_bg' ).fadeOut( 600 );

		} )

	} )

} )



//**********pro********//



//**********case********//



$( document ).ready( function()

{



	$( '.main_case_img' ).height( $( '.main_case_zi' ).height() );



	$( window ).resize( function()

	{

		$( '.main_case_img' ).height( $( '.main_case_zi' ).height() );

	} )



	$( '.main_case_zi>ul>li' ).hover( function()

	{

		var ca = $( this ).index();



		$( '.main_case_zi>ul>li' ).removeClass( 'case_on' );

		$( this ).addClass( 'case_on' );

		$( '.main_case_imgs' ).stop( true, true ).fadeOut( 600 );

		$( '.main_case_imgs' ).eq( ca ).stop( true, true ).fadeIn( 600 );



	}, function()

	{

	} )



	$(".application .title1 span" ).click(function(){

		var ca = $( this ).index();

		$( '.main_case_zi>ul>li' ).removeClass( 'case_on' );

		$(  '.main_case_zi>ul>li' ).eq(ca).addClass( 'case_on' );

		$( '.main_case_imgs' ).stop( true, true ).fadeOut( 600 );

		$( '.main_case_imgs' ).eq( ca ).stop( true, true ).fadeIn( 600 );

	})

	$(".news_fenye li" ).click(function(){

		$(this ).addClass("active" ).siblings("li" ).removeClass("active")

	})

	$(".header_se" ).click(function(){

		$(this ).siblings("div" ).fadeIn("fast")

	})

	$(".header_search input" ).blur(function(){

		$(".header_search div" ).fadeOut("fast")

	})



	$(".erjinav_con1 > li").hover(function(){

	$(".erjinav_con1 > li").stop( true ).animate({"opacity":"0.5"},500)

	$(this).stop( true ).animate({"opacity":"1"},500)

	},function(){	

		$(".erjinav_con1 > li").stop( true ).animate({"opacity":"1"},500)	

	})





	//回到头部：

	$(".goback" ).click(function(){

		$( "html,body" ).stop().animate( { "scrollTop": 0 }, 800 );

	})





	$( window ).scroll( function()

	{

		if( $( window ).scrollTop() > ($( ".inn_ke").offset().top - 500 ))

		{



			$( ".goback" ).css( "opacity", "1" )



		}

		else

		{

			$( ".goback" ).css( "opacity", "0" )



		}



	})



} );



//**********case********// 







