const { getDefaultConfig } = require('expo/metro-config');

// Use Expo's default Metro configuration. We removed SVG transformer support
// because this project uses PNG image assets for icons instead of SVGs.
module.exports = getDefaultConfig(__dirname);
