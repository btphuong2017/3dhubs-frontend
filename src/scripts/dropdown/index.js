import * as $ from 'jquery';
export default (function () {
    $.fn.dropdown = function () {
        let timing = 300;
        let _this = this;
        let toggles = $(this.parent().find('.dropDown__toggle'));
        $.each(toggles, function (index, toggle) {
            $(toggle).click( () => {
                let $target = $(_this[index]);
                if (window.innerWidth > 1024) {
                    defaultDropdown($(this), $target);
                } else {
                    if ($(this).hasClass('mainMenu__link')) {
                        menuDropdown($target);
                    } else {
                        defaultDropdown($target);
                    }
                }
                
            });
        });
        function getHeight($target) {
            let $clone = $target.clone();
            $clone.css({
                'position': 'absolute',
                'display': 'block',
                'visibility': 'hidden',
                'height': 'auto'
            });
            $($target).parent().append($clone);
            let height = $clone.innerHeight();
            $clone.remove();
            return height;
        }
        function menuDropdown($target) {
            if ($target.hasClass('show')) { 
                $target.removeClass('show');
            } else {
                $target.addClass('showing');
                $target.css('height', 0);
                setTimeout(function () {
                    let height = getHeight($target);
                    $target.css('height', height);
                }, 1);
                setTimeout(function () {
                    $target.removeClass('showing');
                    $target.addClass('show');
                    $target.removeAttr('style');
                }, timing + 1);
            }
        }
        function defaultDropdown($toggle, $target) {
            if ($target.hasClass('show')) {
                $target.removeClass('show');
                $toggle.removeClass('active');
            } else {
                hideDropdown();
                $target.toggleClass('show');
                $toggle.toggleClass('active');
                if ($target.data('direct')) {
                    switch($target.data('direct')) {
                        case 'up': 
                        $target.css('bottom', $toggle.innerHeight() );
                        break;
                    }
                }
            }
        }
        function hideDropdown(index = false) {
            if (!index) {
                _this.each( function (i, dp) {
                    $(dp).removeClass('show');
                    $($(dp).parent().find('.dropDown__toggle')).removeClass('active');
                });
            }
        }
    }
    $('.dropDown').dropdown();
}());