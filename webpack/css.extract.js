const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefix = require('./autoprefix');

module.exports = (paths) => {

  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          include: paths,
          use: ExtractTextPlugin.extract({
            publicPath: '../',
            use: ['css-loader',autoprefix(),'sass-loader'],
            fallback: "style-loader",
          }),
        },
        {
            test: /\.css$/,
            include: paths,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader',autoprefix()],
            }),
        },
      ],
    },
    plugins: [
        new ExtractTextPlugin('./styles/[name].css'),
    ],
  };
};