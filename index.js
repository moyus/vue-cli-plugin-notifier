const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = (api, projectOptions) => {
  const options = Object.assign({
    title: 'Vue CLI',
    contentImage: path.resolve(__dirname, 'logo.png'),
    excludeWarnings: true
  }, projectOptions.pluginOptions && projectOptions.pluginOptions.notifier)

  api.chainWebpack(config => {
    config
      .plugin('notifier')
        .use(WebpackNotifierPlugin, [options])
  })
}