$(document).ready(function() {

    function sssDynamicHeight() {
        var avatarwidth = $('.welcome__inner--avatar').innerWidth();
        var avatarheight = avatarwidth * 9 / 16;
        $('.sss_js_avatar').css("height", avatarheight + 'px');

        var ourCropswidth = $('.ourCrops__wrapper').innerWidth();
        var ourCropsheight = ourCropswidth * 4 / 3;
        $('.ourCrops__content').css("height", ourCropsheight + 'px');
    };
    var winWidth = $(window).innerWidth()
    sssDynamicHeight()
    $(window).resize(function() {
        var winWidth = $(window).innerWidth()
        sssDynamicHeight()
    });

    // $(window).scroll(function() {
    //     var scrollTop = $(window).scrollTop();
    //     if (scrollTop > 100) {
    //         $('.sss-nav').addClass('sss-nav__scrolled');
    //     } else {
    //         $('.sss-nav').removeClass('sss-nav__scrolled')
    //     }
    // });
    $(".sss-hamburger").click(function() {
        $('.sss-nav__menu').toggleClass('open');
        $(this).toggleClass('ham_open')
    });
    $(".sss-nav__list--item a").click(function() {
        $('.sss-nav__list--item a').removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
});

// $(window).scroll(function() {
//     var scrollDistance = $(window).scrollTop();

//     // Show/hide menu on scroll
//     //if (scrollDistance >= 850) {
//     //		$('nav').fadeIn("fast");
//     //} else {
//     //		$('nav').fadeOut("fast");
//     //}

//     // Assign active class to nav links while scolling
//     $('.sss-section').each(function(i) {
//         if ($(this).position().top <= scrollDistance) {
//             $('.sss-nav__list--item a.active').removeClass('active');
//             $('.sss-nav__list--item a').eq(i).addClass('active');
//         }
//     });
// }).scroll();