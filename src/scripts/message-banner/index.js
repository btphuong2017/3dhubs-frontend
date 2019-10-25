import * as $ from 'jQuery';
export default (function () {
    $('#messageBanner__closeButton').on('click', function () {
        $('#messageBanner').addClass('hide');
    });
}());