const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@strikelabs/pax',
  '@strikelabs/luna',
  '@strikelabs/vega',
  'lodash-es',
]);

const withOptimizedImages = require('next-optimized-images');

module.exports = withPlugins([[withOptimizedImages, { optimizeImages: false }], withTM]);
