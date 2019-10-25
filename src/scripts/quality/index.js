import * as $ from 'jquery';
export default (function () {
    $('.quality__cardHeader').click(function () {
        var showed = ($(this).attr('data-show'));
        console.log(showed);
        if (showed == 'false') {
            show($(this));
        } else if (showed == 'true'){
            hide($(this));
        }
    });
    function show($this) {
        hide($('.quality__cardHeader[data-show="true"]'));
        $('.quality__image').each( function (i, img) { $(img).removeClass('show')});
        var $image = $('#quality-image-' + $this.data('imageindex'));
        $image.addClass('show');

        var $body = $($this.parent().find('.quality__cardBody'));
        var $content = $($body.find('.quality__innerBody'));
        $body.addClass('showing');
        var height = $content.innerHeight();
        setTimeout(function () {
            $body.css('height', height);
        }, 1);
        setTimeout(function () {
            $this.attr('data-show', 'true');
            $body.addClass('show');
            $body.removeClass('showing');
            $body.removeAttr('style');
        }, 300);
    }

    function hide($this) {
        var $body = $($this.parent().find('.quality__cardBody'));
        var $content = $($body.find('.quality__innerBody'));
        var height = $content.innerHeight();
        $body.css('height', height);
        $body.addClass('showing');
        $body.removeClass('show');
        setTimeout(function () {
            $body.css('height', 0);
        }, 1);
        setTimeout(function () {
            $this.attr('data-show', 'false');
            $body.removeClass('showing');
            $body.removeAttr('style');
        }, 300);
    }
}());