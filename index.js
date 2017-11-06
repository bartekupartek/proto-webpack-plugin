var pbjs = require('protobufjs/cli/pbjs'),
    glob = require('glob')

function ProtoWebpackPlugin(options) {
  var files = glob.sync(options.resolveDir + '/**/*.proto', {})
  pbjs.main(['-t', 'json-module', '-w', 'commonjs', '-o', options.outputFile].concat(files), function(err, output) {
    if (err) { throw err; }
  });
}

ProtoWebpackPlugin.prototype.apply = function(_compiler) { };

module.exports = ProtoWebpackPlugin;