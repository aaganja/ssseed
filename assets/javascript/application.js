$(document).ready(function() {

    $('.ourCrops__block').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("toTop").style.display = "block";
            $('#sss_nav').addClass('scroll__nav');
        } else {
            document.getElementById("toTop").style.display = "none";
            $('#sss_nav').removeClass('scroll__nav');
        }
    }


    function sssDynamicHeight() {
        var avatarwidth = $('.welcome__inner--avatar').innerWidth();
        var avatarheight = Math.round(avatarwidth * 10 / 9);
        $('.sss_js_avatar').css("height", avatarheight + 'px');

        var ourCropswidth = $('.ourCrops__wrapper').innerWidth();
        var ourCropsheight = Math.round(ourCropswidth * 4 / 3);
        $('.ourCrops__content').css("height", ourCropsheight + 'px');

        var ourGallerywidth = $('.gallery__container--item').innerWidth();
        var ourGalleryheight = Math.round(ourGallerywidth * 3 / 4);
        $('.gallery__container--item').css("height", ourGalleryheight + 'px');

        // $('#sss_videoModal').on('load', function() {
        var ourVideowidth = $('.modal-dialog').innerWidth();
        var ourVideoheight = Math.round(ourVideowidth * 9 / 16);
        $('.sss-videoContent').css("height", ourVideoheight + 'px');
        // });

        var ourTeamwidth = $('.team__sss--width').innerWidth();
        var ourTeamheight = Math.round(ourTeamwidth * 3 / 4);
        $('.team__avatar').css("height", ourTeamheight + 'px');


    };
    var winWidth = $(window).innerWidth()
    sssDynamicHeight()
    $(window).resize(function() {
        var winWidth = $(window).innerWidth()
        sssDynamicHeight()
    });

    // $(".sss-hamburger").click(function() {
    //     $('.sss-nav__menu').toggleClass('open');
    //     $(this).toggleClass('ham_open')
    // });
    $("#sss_gallery").lightGallery();

});

// $(document).ready(function() {
//     $('a[href*=#]').bind('click', function(e) {
//         e.preventDefault(); // prevent hard jump, the default behavior

//         var target = $(this).attr("href"); // Set the target as variable

//         // perform animated scrolling by getting top-position of target-element and set it as scroll target
//         $('html, body').stop().animate({
//             scrollTop: $(target).offset().top
//         }, 10000, function() {
//             location.hash = target; //attach the hash (#jumptarget) to the pageurl
//         });

//         return false;
//     });
// });