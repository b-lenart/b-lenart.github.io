    $(document).ready(function(){
    $(this).scrollTop(0);
});

$(document).ready(function() {
	$('#wrapper').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
        responsiveWidth: 992,
        slidesNavigation:true,
        controlArrows:false,
        
        navigation: true,
        navigationPosition: 'left',
	});
});




var slickCarousel = $('.slider-vertical');
    slickCarousel.slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    dots: false,
    centerPadding: '50px',
    arrows: true,
    prevArrow: $('#scroll2'),
    nextArrow: $('#scroll1'),
    responsive: [{
            breakpoint: 1500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }, 
            {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
			    vertical: true,
			    verticalSwiping: false,
            }
        }, {
            breakpoint: 2000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
			    vertical: true,
			    verticalSwiping: false,
            }
        }
    ]
});



var slickCarouselTwo = $('.slider-horizontal');
    slickCarouselTwo.slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    vertical: false,
    verticalSwiping: true,
    centerPadding: '50px',
    arrows: true,
    prevArrow: $('#prevButton'),
    nextArrow: $('#nextButton'),
    responsive: [{
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }, 
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
			    vertical: true,
			    verticalSwiping: false,
            }
        }
    ]
});

$('div[data-slide]').click(function(e) {
//   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.slider-horizontal').slick('slickGoTo', slideno);
 });

var menuButton = document.getElementById('menu-responsive');
var menuResp = document.getElementById('phone-menu');

menuButton.addEventListener('click', function() {
        if(menuResp.style.display=='none') {
    menuResp.style.display='block';}
    else {
        menuResp.style.display='none';
    }
});



var respButton = document.getElementsByClassName("phone-menu-hrefs");
var check89 = document.getElementById('check8');

for (var i=0; i<respButton.length; i++) {
    
    respButton[i].addEventListener('click', function() {
    document.getElementById('phone-menu').style.display='none';
    });
};


var aplikacje = document.getElementById('aplikacje');
var produkty = document.getElementById('produkty');
var appcont1 = document.getElementById('app-cont');
var appcont2 = document.getElementById('app-cont2');

aplikacje.addEventListener("click", function() {
     aplikacje.style.color="lightgrey";                      
     produkty.style.color="#292929";
    appcont2.style.display="none";
     appcont1.style.display="block";
});

produkty.addEventListener("click", function() {
     produkty.style.color="lightgrey";                      
     aplikacje.style.color="#292929";
    appcont1.style.display="none";
     appcont2.style.display="block";
});


$('#photo1').click(function() {
    document.getElementById('sub-thi-cont2').style.display="none";
    document.getElementById('sub-thi-cont3').style.display="none";
    document.getElementById('sub-thi-cont4').style.display="none";
        
    document.getElementById('sub-thi-cont1').style.display="block";
});

$('#photo2').click(function() {
    document.getElementById('sub-thi-cont1').style.display="none";
    document.getElementById('sub-thi-cont3').style.display="none";
    document.getElementById('sub-thi-cont4').style.display="none";
        
    document.getElementById('sub-thi-cont2').style.display="block";
});

$('#photo3').click(function() {
    document.getElementById('sub-thi-cont1').style.display="none";
    document.getElementById('sub-thi-cont2').style.display="none";
    document.getElementById('sub-thi-cont4').style.display="none";
    
    document.getElementById('sub-thi-cont3').style.display="block";
});

$('#photo4').click(function() {
    document.getElementById('sub-thi-cont1').style.display="none";
    document.getElementById('sub-thi-cont2').style.display="none";
    document.getElementById('sub-thi-cont3').style.display="none";
    
    document.getElementById('sub-thi-cont4').style.display="block";
});




    