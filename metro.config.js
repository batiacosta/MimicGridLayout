const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.transformer = {
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
  // Ensure Metro/transformer knows where RN's AssetRegistry is so binary assets
  // imported from node_modules (PNG) don't get rewritten to "missing-asset-registry-path".
  // Use the module name string so Metro can resolve it correctly.
  assetRegistryPath: 'react-native/Libraries/Image/AssetRegistry',
};

config.resolver = {
  assetExts: config.resolver.assetExts.filter(ext => ext !== 'svg'),
  sourceExts: [...config.resolver.sourceExts, 'svg'],
};

module.exports = config;
