const AutoPrefixerPlugin = require('autoprefixer');
const CssMqpackerPlugin = require('css-mqpacker');
const CssNanoPlugin = require('cssnano');

module.exports = {
  plugins: [
    new CssNanoPlugin({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
    new CssMqpackerPlugin(),
    new AutoPrefixerPlugin(),
  ],
};
