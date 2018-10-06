var fs = require('fs')
var Tabletop = require('tabletop')

init()

// 1PX5_V64YhlXWTtFpGPsUWow1wfwzTF1gh5benBXz8vw

function init() {
  Tabletop.init({
    key: '1PX5_V64YhlXWTtFpGPsUWow1wfwzTF1gh5benBXz8vw',
    callback: saveData
  })
}

function saveData(data, tabletop) {
  var data = tabletop.sheets("Paintings").elements
  console.log("Writing " + data.length + " items")
  var formattedBlooleans = JSON.stringify(data, " ", null)
    .replace(new RegExp('"true"', 'g'), true)
    .replace(new RegExp('"false"', 'g'), false)
  var vermeers = 'var vermeers = ' + formattedBlooleans
  fs.writeFileSync('assets/data.json', vermeers)
  console.log('✨\n')
}
