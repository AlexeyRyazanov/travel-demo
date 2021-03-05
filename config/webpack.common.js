const paths = require('./paths');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

const cleanOptions = {
   cleanOnceBeforeBuildPatterns: [
      '**',
      '!manifest.json*',
   ],
   // verbose: true,
   // dry: false
};

module.exports = {
   // Where webpack looks to start building the bundle
   //   entry: [paths.src + '/index.js'],
   entry: [paths.src + '/main/index.tsx'],

   // Where webpack outputs the assets and bundles
   output: {
      path: paths.build,
      filename: '[name].bundle.js',
      publicPath: '/',
   },

   // Customize the webpack build process
   plugins: [
      // Removes/cleans build folders and unused assets when rebuilding
      new CleanWebpackPlugin(cleanOptions),

      // Copies files from target to destination folder
      new CopyWebpackPlugin({
         patterns: [
            {
               from: paths.public,
               to: 'assets',
               globOptions: {
                  ignore: ['*.DS_Store'],
               },
            },
            // {
            //    from: paths.src + '/images/airlines/',
            //    to: 'images/airlines/',
            // },
         ],
      }),

      // Generates an HTML file from a template
      // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
      new HtmlWebpackPlugin({
         // title: 'webpack Boilerplate',
         // favicon: paths.src + '/images/favicon.png',
         template: paths.src + '/index.html', // template file
         filename: 'index.html', // output file,
         minify: {
            minifyJS: true,
            minifyCSS: true,
            removeComments: true,
            useShortDoctype: true,
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true
         },
      }),
      new WebpackBar({
         color: '#2472c8',
         profile: true,
      }),
   ],

   // Determine how modules within the project are treated
   module: {
      rules: [
         // JavaScript: Use Babel to transpile JavaScript files
         // {
         //    test: /\.js$/,
         //    exclude: /node_modules/,
         //    use: ['babel-loader']
         // },

         // TypeScript
         {
            test: /\.(js|ts|jsx|tsx)?$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: 'ts-loader',
                  options: {
                     transpileOnly: true,
                  },
               }
            ]
         },

         // Styles: Inject CSS into the head with source maps
         {
            test: /\.(scss|sass|css)$/,
            use: [
               'style-loader',
               {
                  loader: 'css-loader',
                  options: {
                     sourceMap: true,
                     importLoaders: 1
                  }
               },
               {
                  loader: 'postcss-loader',
                  options: {
                     sourceMap: true
                  }
               },
               {
                  loader: 'sass-loader',
                  options: {
                     sourceMap: true
                  }
               },
            ],
         },

         // Images: Copy image files to build folder
         // {
         //    test: /\.(?:ico|svg|gif|png|jpg|jpeg)$/i,
         //    type: 'asset/resource'
         // },

         {
            test: /\.(jpe?g|png|gif|webp|pdf|svg)(\?[\s\S]+)?$/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     context: paths.src,
                     name: '[path][name].[ext]',
                  }
               },
               // {
               //    loader: 'image-webpack-loader',
               //    options: {
               //       mozjpeg: {
               //          progressive: true,
               //          quality: 85
               //       },
               //       optipng: {
               //          enabled: false,
               //       },
               //       pngquant: {
               //          quality: [0.65, 0.90],
               //          speed: 4
               //       },
               //       gifsicle: {
               //          interlaced: false,
               //       },
               //       svgo: {
               //          enabled: true,
               //          floatPrecision: 1,
               //       },
               //       // webp: {
               //       //    quality: 90,
               //       //    preset: 'picture'
               //       // }
               //    },
               // }
            ]
         },

         // // Fonts: Inline files
         // {
         //    test: /\.(woff(2)?|eot|ttf|otf|)$/,
         //    type: 'asset/inline'
         // },

         {
            test: /\.(woff2|woff|ttf|eot)(\?[\s\S]+)?$/,
            use: {
               loader: 'file-loader',
               options: {
                  context: 'src',
                  name: '[path][name].[ext]',
               }
            },
         },
      ],
   },
}
