import $ from 'jquery';

var url = window.location.href;
var customCSSParam = url.match(/(custom_css=(.+))&/);
var param = '';
var file = '';
var loadedCss = '';

if (customCSSParam) {
    param = customCSSParam[1];
    file = customCSSParam[2].replace(/%2F/g, '/').replace(/%3D/g, '=');
    if (loadedCss !== file) {
        $('head').append('<link rel="stylesheet" type="text/css" href="https://' + file + '">');
        loadedCss = file;
    }
}


