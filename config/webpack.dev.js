const paths = require('./paths');

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge(common, {
   // Set the mode to development or production
   mode: 'development',

   // Control how source maps are generated
   devtool: 'inline-source-map',
   // devtool: 'eval-cheap-module-source-map',

   // Spin up a server for quick development
   devServer: {
      historyApiFallback: true,
      contentBase: paths.build,
      hot: true,
      stats: 'errors-warnings',
      // open: true,
      // compress: true,
      // port: 8080,
   },

   resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
      alias: { 'react-dom': '@hot-loader/react-dom' },
   },

   optimization: {
      runtimeChunk: true,
   },

   plugins: [
      // Only update what has changed on hot reload
      new webpack.HotModuleReplacementPlugin(),
      new ForkTsCheckerWebpackPlugin({
         typescript: {
            // configFile: './src/main/tsconfig.json'
            configFile: paths.src + '/tsconfig.dev.json'
         }
      }),
   ],
})
