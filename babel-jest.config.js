// This Babel configuration is only used by Jest.
// The file was intentionally not named babel.config.js to avoid Parcel picking it up.
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: 'react',
      },
    ],
  ],
  plugins: [
    // ↓↓ defined last ↓↓
    '@compiled/babel-plugin',
  ],
};
