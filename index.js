var pbjs = require('protobufjs/cli/pbjs'),
    glob = require('glob')

function ProtoWebpackPlugin(options) {
  var pattern = options.matchNames && '@(' + options.matchNames.join('.proto|') + '.proto)' || '*.proto'
  var files = glob.sync(pattern, { cwd: options.resolveDir, absolute: true, matchBase: true })
  pbjs.main(['-t', 'json-module', '-w', 'commonjs', '-o', options.outputFile].concat(files), function(err, output) {
    if (err) { throw err; }
  });
}

ProtoWebpackPlugin.prototype.apply = function(_compiler) { };

module.exports = ProtoWebpackPlugin;
