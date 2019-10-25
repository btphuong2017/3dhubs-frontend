import * as $ from 'jquery';
export default (function () {
    $.fn.collapse = function () {
        const timing = 300;
        let _this = this;
        let toggles = $(this.parent().find('.collapse__toggle'));
        $.each(toggles, function (index, toggle) {
            $(toggle).click(() => {
                let $target = ($(toggle).data('target')) ? $($(toggle).data('target')) : $($(toggle).parent().find('.collapse'));
                if (!$target.hasClass('show')) {
                    let height = getHeight($target);
                    $target.addClass('collapsing');
                    setTimeout(function () { $target.css('height', height); }, 1);
                    setTimeout(function () { $target.removeClass('collapsing'); $target.addClass('show'); $target.removeAttr('style'); }, timing + 1);
                } else {
                    $target.removeClass('show');
                    let height = getHeight($target);
                    $target.css('height', height);
                    $target.addClass('collapsing');
                    setTimeout(function () {
                        $target.css('height', 0);
                    }, 1);
                    setTimeout(function () {
                        $target.removeClass('collapsing');
                        $target.removeAttr('style');
                    }, timing);
                }
            });
        });
    }

    function getHeight($target) {
        let $clone = $target.clone();
        $clone.css({
            'position': 'absolute',
            'display': 'block',
            'visibility': 'hidden',
            'height': 'auto'
        });
        $('body').append($clone);
        let height = $clone.innerHeight();
        $clone.remove();
        return height;
    }
    $('.collapse').collapse();
}());