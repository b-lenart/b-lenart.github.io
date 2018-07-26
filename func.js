function scrollIns(par1) {
    document.getElementById(par1).scrollIntoView({behavior: 'smooth'});
    mobileMenu.classList.add("mobile-animation-up");
}

function scrollInsA() {
    window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
    });
}

function scrollInsB() {
    mobileMenu.classList.remove("mobile-animation");
    mobileMenu.classList.add("mobile-animation-up");
    
    window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
    });
}

var moveSlider = $('.long-slide');

function goLeft() {
    
    moveSlider.animate({left: '0%'}, 250, function() {
        moveSlider.css('left', '-100%');
        $('.slide').first().before($('.slide').last());
    })
}

function goRight() {
    
    moveSlider.animate({left: '-200%'}, 250, function() {
        moveSlider.css('left', '-100%');
        $('.slide').last().after($('.slide').first());
    })
}

$(window).scroll(function() {
    var scroll_top = $(window).scrollTop();
    console.log(scroll_top);
    
    var deviceHeight = window.innerHeight;
    
    var desc = $('#desc');
//    console.log(desc.scrollTop());
    console.log("height:" + deviceHeight);
    
    const triangle = document.querySelector(".triangle-img");
    triangle.style.transform = "rotate(" + scroll_top/40 +"deg)";
    
    
    
//    console.log("dist: " + distanceAbout);
//    
//        console.log("distance: " + distance);
//        console.log("offset().top: " + elementOffset);
//        console.log("scrollTop: " + scroll_top);
    
    
    
    if(scroll_top>deviceHeight*0.2) {
        var about = document.querySelector('#aboutme');
        about.style.opacity=1;
    }
    
    
    
    // Background-image scrolling slower than content
    if(window.innerWidth>576) {
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundPosition = ("0px " + scroll_top/2 + "px");
    }
    // Right navbar icons
    
    var icon1 = document.getElementById('right-nav-1');
    var icon2 = document.getElementById('right-nav-2');
    var icon3 = document.getElementById('right-nav-3');
    var icon4 = document.getElementById('right-nav-4');
    var icon5 = document.getElementById('right-nav-5');
    
    var heightDev = (-1*(deviceHeight/2)+80);
    console.log("heightDev: " + heightDev);
    
    
    // 1st right nav icon
    
    var elementOffset1 = $('#desc').offset().top;
    var distance1 = (elementOffset1 - scroll_top);
    console.log("desc: " + distance1);
    
    if(distance1>(-1*(deviceHeight/2)+100)) {
        icon1.style.fontSize="1.8rem";
        icon1.style.opacity=1;
        //document.getElementById('container').style.background="red";
    } else {
        icon1.style.fontSize="1.4rem";
        icon1.style.opacity=0.5;
    }
    
    // 2nd right nav icon
    
    var about = $('#aboutme');
    
    
    
    var elementOffset2 = about.offset().top;
    var distance2 = (elementOffset2 - scroll_top);
    console.log("about: " + distance2);
    
    if(distance2<deviceHeight*0.7) {
        about.animate({left: 0}, 500, "swing");
    }
    
    var aboutHeight = about.height();
    
    if(distance2<(deviceHeight/2)-50 && distance2>(-1*(aboutHeight/2)+56)) {
        icon2.style.fontSize="1.8rem";
        icon2.style.opacity=1;
    } else {
        icon2.style.fontSize="1.4rem";
        icon2.style.opacity=0.5;
    }
    
    // 3rd right nav icon
    
    var projects = $('#projects');
    
    
    
    var projectsHeight = projects.height();
    
    var elementOffset3 = projects.offset().top;
    var distance3 = (elementOffset3 - scroll_top);
    console.log("projects: " + distance3);
    
    if(distance3<deviceHeight*0.7) {
        projects.animate({left: 0}, 500, "swing");
    }
    
    if(distance3<(deviceHeight/2)-50 && distance3>(-1*(deviceHeight/10)+50)) {
        icon3.style.fontSize="1.8rem";
        icon3.style.opacity=1;
    } else {
        icon3.style.fontSize="1.4rem";
        icon3.style.opacity=0.5;
    }
    
    // 4th right nav icon
    
    var tech = $('#technologies');
    
    var techHeight = tech.height();
    
    var elementOffset4 = tech.offset().top;
    var distance4 = (elementOffset4 - scroll_top);
    console.log("technologies: " + distance4);
    
    if(distance4<deviceHeight*0.7) {
        tech.animate({left: 0}, 500, "swing");
    }
    
    if(distance4<(deviceHeight*0.8) && distance4>((deviceHeight*0.3))) {
        icon4.style.fontSize="1.8rem";
        icon4.style.opacity=1;
    } else {
        icon4.style.fontSize="1.4rem";
        icon4.style.opacity=0.5;
    }
    
    // 5th right nav icon
    
    var contact = $('#contact');
    
    var contactHeight = contact.height();
    
    var elementOffset5 = contact.offset().top;
    var distance5 = (elementOffset5 - scroll_top);
    console.log("contact: " + distance5);
    
    if(distance5<deviceHeight*0.5) {
//        contact.animate({left: 0}, 500, "swing");
//        contact.style.opacity=1;
        document.getElementById("contact").style.opacity=0.9;
    }
    
    if(distance5<(deviceHeight*0.6)) {
        icon5.style.fontSize="1.8rem";
        icon5.style.opacity=1;
    } else {
        icon5.style.fontSize="1.4rem";
        icon5.style.opacity=0.5;
    }
});


//mobile menu

const hamburgerIcon = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerIcon.addEventListener('click', function() {
    mobileMenu.style.display="block";
    mobileMenu.classList.remove("mobile-animation-up");
    mobileMenu.classList.add("mobile-animation");
    
});


document.addEventListener('scroll', function() {
    
    mobileMenu.classList.remove("mobile-animation");
    mobileMenu.classList.add("mobile-animation-up");
    });
    

//document.getElementById('right-nav-1').addEventListener("mouseover", function() {
//    document.getElementById('right-nav-1').style.background="red";
//    document.getElementById('right-nav-1').style.color="red";
//});