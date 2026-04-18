'use strict';

const path = require('path');
const { register } = require('tsconfig-paths');

const projectRoot = path.join(__dirname, '..');

// Compiled output uses `require("src/...")`; map those to dist/ (same as start:prod).
register({
  baseUrl: projectRoot,
  paths: {
    'src/*': ['dist/*'],
  },
});

module.exports = require(path.join(projectRoot, 'dist', 'main.js')).default;
