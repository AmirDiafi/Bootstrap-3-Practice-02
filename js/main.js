
/*global $, document, ready, alert, console*/

$(document).ready(function () {

    $('body').addClass(localStorage.getItem('switchMode'));
    $('.pricing-table .p-table .price').addClass(localStorage.getItem('switchModePrice'));
    $('.pricing-table .p-table h3').addClass(localStorage.getItem('switchModePrice'));

    // Start Fixed Bar Custom On Scroll

    $(window).scroll(function () {

        $(this).scrollTop() >= $('.navbar').height() ? $('.navbar').css({opacity: .9}) : $('.navbar').css({opacity: 1});
        // $(this).scrollTop() >= 300 ? $('.navbar').slideUp(500) : $('.navbar').slideDown(500);

        // Task Of The Zero

        // if ($(this).scrollTop() >= $('.navbar').height()) {
        //     $('.navbar').addClass('navbar-fixed-top');
        //     $('.navbar').removeClass('navbar-fixed-bottom')
        // } else {
        //     $('.navbar').addClass('navbar-fixed-bottom');
        //     $('.navbar').removeClass('navbar-fixed-top');
        // }
    })
    // $(this).scrollTop() >= 300 ? $('.navbar').slideUp(500) : $('.navbar').slideDown(500)
    $(this).scrollTop() >= $('.navbar').height() ? $('.navbar').css({opacity: .9}) : $('.navbar').css({opacity: 1})

    // Start Toggle Navbar Custom
    $('.navbar-toggle').click(function () {
        $('.navbar-toggle span:nth-of-type(2)').toggleClass('one');
        $('.navbar-toggle span:nth-of-type(3)').toggleClass('tow');
        $('.navbar-toggle span:nth-of-type(4)').toggleClass('three');
    })

    //Toggle Dark mode

    $('.switch-mode span').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('body').removeClass();
        $('body').addClass($(this).data('color'));
        localStorage.setItem('switchMode', $(this).data('color'));
        $('.price').removeClass('light-mode-price dark-mode-price');
        $('.pricing-table .p-table h3').removeClass('light-mode-price dark-mode-price');
        localStorage.setItem('switchModePrice', $(this).data('price'));
        $('.price').addClass($(this).data('price'));
        $('.pricing-table .p-table h3').addClass($(this).data('price'));
    })

    // Start Tabs

    $('.tabs ul li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $(".tabs " + $(this).data('selected')).addClass('selected').siblings().removeClass('selected');
    })

})