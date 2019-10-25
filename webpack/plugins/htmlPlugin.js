const
    path = require('path'),
    manifest = require('../manifest'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const titles = {
    'home': 'Home Template',
    'page' : 'Page Template',
    'page-2' : 'Page Template 2'
};

module.exports = Object.keys(titles).map(title => {
    return new HtmlWebpackPlugin({
        template: path.join(manifest.paths.input, `${title}.html`),
        path: manifest.paths.output,
        filename: `${title}.html`,
        inject: true,
        minify: {
            collapseWhitespace: manifest.IS_PRODUCTION,
            minifyCSS: manifest.IS_PRODUCTION,
            minifyJS: manifest.IS_PRODUCTION,
            removeComments: manifest.IS_PRODUCTION,
            useShortDoctype: manifest.IS_PRODUCTION,
        },
    });
});