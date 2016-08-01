var fs = require('fs')
var Tabletop = require('tabletop')

init()

function init() {
  Tabletop.init({
    key: '1PX5_V64YhlXWTtFpGPsUWow1wfwzTF1gh5benBXz8vw',
    callback: saveData,
    simpleSheet: true
  })
}

function saveData(data, tabletop) {
  var vermeers = 'var vermeers = ' + JSON.stringify(data, null, ' ')
  fs.writeFileSync('assets/data.json', vermeers)
  console.log('✨')
}
