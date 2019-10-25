const manifest = require('../manifest');
const plugins = [];
plugins.push(
    require('./cleanWebpackPlugin'),
    require('./miniCssExtractPlugin'),
    ...(require('./htmlPlugin')),
    require('./jquery')
);
module.exports = plugins;