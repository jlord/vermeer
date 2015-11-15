var fs = require('fs')
var Tabletop = require('tabletop')

init()

function init() {
  Tabletop.init( { key: '1O6BCyMFwOeQetLlk4WAjs04cEtoxwQvgRAjGNm-FEVo',
                   callback: saveData,
                   simpleSheet: true } )
}

function saveData(data, tabletop) {
  var vermeers = 'var vermeers = ' + JSON.stringify(data, null, ' ')
  fs.writeFileSync('data.json', vermeers)
  console.log('Done')
}
