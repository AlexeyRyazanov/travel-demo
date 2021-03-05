// module.exports = {
//   plugins: {
//     'postcss-preset-env': {
//       browsers: 'last 2 versions',
//     },
//   },
// }

const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
   plugins: [
      postcssPresetEnv({
         stage: 3
      }),
      require('cssnano')({
         preset: 'default'
      }),
      require('postcss-unprefix'),
      require('autoprefixer'),
   ],
}