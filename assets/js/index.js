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
  var formattedBlooleans = JSON.stringify(data, null, ' ')
    .replace(new RegExp('"true"', 'g'), true)
    .replace(new RegExp('"false"', 'g'), false)
  var vermeers = 'var vermeers = ' + formattedBlooleans
  fs.writeFileSync('assets/data.json', vermeers)
  console.log('✨\n')
}
