const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const postcssLoader = require('./postcss.loader');

module.exports = merge(baseConfig, {
  devtool: 'eval-source-map',

  devServer: {
    inline: true,
    contentBase: 'src',
    port: '3000',
    publicPath: '/github-user-search/',
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          postcssLoader,
        ],
      },
    ],
  },
});
