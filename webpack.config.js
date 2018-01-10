const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require("glob-all");
const webpack = require('webpack');
const merge = require('webpack-merge');

const devserver = require('./webpack/devserver');
const loadCSS = require('./webpack/loadCSS');
const autoprefix = require('./webpack/autoprefix');

const loadImages = require('./webpack/loadImages');
const loadFonts = require('./webpack/loadFonts');
const uglifyJavaScript = require('./webpack/uglifyJavaScript');
const loadPug = require('./webpack/loadPug');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractcss = require('./webpack/css.extract');
const minifyImages = require('./webpack/minifyImages');
const purifyCSS = require('./webpack/purifyCSS');

const PATHS = {
  app: path.join(__dirname, "app"),
  build: path.join(__dirname, "docs"),
};

const commonConfig = merge([
    {
      entry: {
        index: PATHS.app + "/scripts/index.js",
      },
      output: {
        path: PATHS.build,
        filename: "./scripts/[name].js",
      },
      plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: PATHS.app + '/index.pug',
          chunks: ['index', 'common']
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: "common"
        }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),

      ],
    },
    loadFonts({
      options: {
        name: "fonts/[name].[ext]",
      },
    }),
    loadPug(),
    loadImages(),
    purifyCSS({
      paths: glob.sync([
        path.join(__dirname,'app/*.pug'),
        path.join(__dirname,'app/templates/*.pug')
      ]),
    }),
  ]);

const productionConfig = merge([
  extractcss(),
  uglifyJavaScript({ useSourceMap: true }),

]);

const developmentConfig = merge([
  sass(),
  css(),
  devserver(),
]);

module.exports = env => {
    if (env === "production") {
      return merge(productionConfig, commonConfig);
    }
    return merge(developmentConfig, commonConfig);
  };