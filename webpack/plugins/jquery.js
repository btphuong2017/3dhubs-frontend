const webpack = require('webpack');
module.exports = new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jQuery",
    "window.jQuery": "jquery"
});