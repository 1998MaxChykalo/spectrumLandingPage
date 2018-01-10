const ReloadHtmlWebpackPlugin = require('reload-html-webpack-plugin');

module.exports = function(){
    return {
        devServer: {
            stats: "errors-only",
            open: true,
            hot: true
        },
        plugins: [new ReloadHtmlWebpackPlugin()]
    };
}