import './index.scss';

import './scripts';
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
    console.log('Start Website 3DHubs');
});