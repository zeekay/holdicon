var fs   = require('fs')
var glob = require('glob')

var map = {
  jQuery: [
    '**/jquery.js',
    '**/jquery.min.js'
  ],
  Bootstrap: [
    '**/bootstrap.js',
    '**/bootstrap.min.js'
  ]
}

module.exports = {
  removeAnnoyance: function(name) {
    map[name].forEach(function(pattern) {
      glob(pattern, function(err, files) {
        files.forEach(function(file) {
          console.log('removing ' + file + ' without warning')
          fs.unlink(file, function(err) {
            if (err) throw err
            console.log('...ya welcome.')
          })
        })
      })
    })
  }
}
