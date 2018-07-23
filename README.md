# vue-cli-plugin-notifier

This is a [vue-cli](https://cli.vuejs.org/) plugin that uses the [webpack-notifier](https://github.com/Turbo87/webpack-notifier) package to display build status system notifications to the user.

## Installation
```bash
npm install --save-dev vue-cli-plugin-notifier
# OR
yarn add --dev vue-cli-plugin-notifier
```

## Configuration
In the `vue.config.js` file:

```javascript
module.exports = {
  pluginOptions: {
    notifier: {/* ... */}
  }
}
```