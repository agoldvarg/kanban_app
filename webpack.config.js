// Requires
const path = require('path');
const merge = require('webpack-merge');

// Target e.g. 'start'
const TARGET = process.env.npm_lifecycle_event;

// Build paths
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

// Common configuration
const common = {
  // Entry accepts a path or an object of entries.
  // The build chapter contains an example of the latter.
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  }
};

// Default configuration
if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {});
}

if (TARGET === 'build') {
  module.exports = merge(common, {});
}
