<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>Proto Webpack Plugin</h1>
  <p>Resolve all proto files in resolve dir and subdirectores and create bundle file.</p>
</div>

<h2 align="center">Install</h2>

```
npm install --save-dev proto-webpack-plugin
```

<h2 align="center">Usage</h2>

```javascript
var ProtoWebpackPlugin = require('proto-webpack-plugin')

module.exports = {
  plugins: [
    new ProtoWebpackPlugin({
      resolveDir: resolve('/src/statics/proto'),
      outputFile: resolve('/src/statics/proto-bundle.js')
    })
  ]
}
```
