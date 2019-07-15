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

});