const paths = require('./paths')

const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const glob = require('glob-all');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin');

module.exports = merge(common, {
   mode: 'production',
   devtool: false,

   output: {
      path: paths.build,
      publicPath: '/',
      filename: 'js/[name].[contenthash].bundle.js',
   },

   resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
   },

   plugins: [
      // Extracts CSS into separate files
      // Note: style-loader is for development, MiniCssExtractPlugin is for production
      new MiniCssExtractPlugin({
         filename: 'styles/[name].[contenthash].css',
         chunkFilename: '[id].css',
      }),
      // new MiniCssExtractPlugin({
      //    filename: 'styles/[name].[chunkhash:4].css',
      //    chunkFilename: '[id].css',
      // }),
      new PurgecssPlugin({
         paths: glob.sync(`${paths.src}/**/*`, { nodir: true }),
      }),
   ],

   module: {
      rules: [
         {
            test: /\.(scss|sass|css)$/,
            exclude: /node_modules/,
            use: [
               MiniCssExtractPlugin.loader,
               {
                  loader: 'css-loader',
                  options: {
                     importLoaders: 2,
                     sourceMap: false,
                  },
               },
               'postcss-loader',
               'sass-loader',
            ],
         },
      ],
   },

   optimization: {
      runtimeChunk: true,
      minimize: true,
      minimizer: [
         new CssMinimizerPlugin(), "..."
      ],
      // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
      // instead of having their own. This also helps with long-term caching, since the chunks will only
      // change when actual code changes, not the webpack runtime.
      // runtimeChunk: {
      //    name: 'runtime',
      // },
      splitChunks: {
         // name: true,
         // name(module, chunks, cacheGroupKey) {
         //    const chunkName = module.context.match(/[\\/]src\/components\/Layout[\\/](.*?)([\\/]|$)/)[1];
         //    return chunkName;
         // },
         chunks: 'all',
         maxInitialRequests: Infinity,
         minSize: 0,
         cacheGroups: {
            default: {
               minChunks: 2,
               priority: -20,
               reuseExistingChunk: true
            },
            // defaultVendors: {
            //    priority: -10,
            //    reuseExistingChunk: true,
            //    test: /[\\/]node_modules[\\/]/,

            //    // Bundled npm file
            //    // filename: isProduction ? 'app.vendor.[contenthash:4].js' : 'app.vendor.[hash].js',

            //    // Separate files for each npm module
            //    name(module) {
            //       // get the name. E.g. node_modules/packageName/not/this/part.js
            //       // or node_modules/packageName
            //       const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            //       // npm package names are URL-safe, but some servers don't like @ symbols
            //       // return `vendor/npm.${packageName.replace('@', '')}`;
            //       return `npm.${packageName.replace('@', '')}`;
            //    },
            // },

            // Separate files for each folder from scr/main using text RegExp
            // utils: {
            //    test: /([\\/]src[\\/]main[\\/]utils[\\/])/,
            //    name: 'app.utils',
            //    priority: -10,
            //    reuseExistingChunk: true
            // },

            // vendors: {
            //    priority: -10,
            //    reuseExistingChunk: true,
            //    test: /[\\/]node_modules[\\/]/,

            //    // Bundled npm file
            //    // filename: isProduction ? 'app.vendor.[contenthash:4].js' : 'app.vendor.[hash].js',

            //    // Separate files for each npm module
            //    name(module) {
            //       // get the name. E.g. node_modules/packageName/not/this/part.js
            //       // or node_modules/packageName
            //       const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            //       // npm package names are URL-safe, but some servers don't like @ symbols
            //       // return `vendor/npm.${packageName.replace('@', '')}`;
            //       return `npm.${packageName.replace('@', '')}`;
            //    },
            // }
         }
      },
   },
   
   performance: {
      hints: 'warning',
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
   },
})
