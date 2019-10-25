import * as $ from 'jquery';

export default (function () {
    $('.platformDescription__contentItem').click(function () {
        if (!$(this).hasClass('active')) {
            var screenIndex = $(this).attr('data-screenIndex');
            var $screenImage = $('#platformDescription__screen--' + screenIndex);
            $('.platformDescription__contentItem').each(function (index, item) {
                $(item).removeClass('active');
            });
            $('.platformDescription__screen').each(function (index, screen) {
                $(screen).removeClass('active');
            });
            $(this).addClass('active');
            $screenImage.addClass('active');
        }
    });
}());