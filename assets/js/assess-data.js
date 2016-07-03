var fs = require('fs')

var data = require('../data.json')

var stats = {}

writeStats()

function writeStats() {
  getCountries(data)
  getMusuems(data)
  getVisible(data)
  getSeen(data)
  fs.writeFileSync('assets/stats.json', 'var stats = ' + JSON.stringify(stats, null, ' '))
}

function getCountries (data) {
  var visited = []
  var all = []
  var remaining = []
  data.forEach(function (visit) {
    if (visit.Country === '') return
    if (all.indexOf(visit.Country) < 0) {
      all.push(visit.Country)
    }
    if (visit.Seen === 'Y' && visited.indexOf(visit.Country) < 0) {
      visited.push(visit.Country)
    }
    all.forEach(function (country) {
      if (visited.indexOf(country) < 0) remaining.push(country)
    })
  })
  stats.visitedCountries = visited
  stats.visitedCountriesNo = visited.length
  stats.allCountries = all
  stats.allCountriesNo = all.length
  stats.CountriesRemaining = remaining
}

function getMusuems (data) {
  var visited = []
  var all = []
  var remaining = []
  data.forEach(function (visit) {
    if (visit['Permanent Location'] === '') return
    if (all.indexOf(visit['Permanent Location']) < 0) {
      all.push(visit['Permanent Location'])
    }
    if (visit.Seen === 'Y' && visited.indexOf(visit.Location) < 0) {
      visited.push(visit['Permanent Location'])
    } else return
  })
  all.forEach(function (museum) {
    if (museum.match('Isabella') || museum.match('Private')) return
    if (visited.indexOf(museum) < 0) remaining.push(museum)
  })
  stats.visitedMuseums = visited
  stats.visitedMuseumsNo = visited.length
  stats.allMuseums = all
  stats.allMuseumsNo = all.length
  stats.museumRemaining = remaining
}

function getVisible (data) {
  var all = data.map(function (piece) { return piece.Name })
  var visible = []
  var notPubic = []
  data.forEach(function (piece) {
    if (piece.Seen === 'N/A') notPubic.push(piece.Name)
    else visible.push(piece.Name)
  })
  stats.visible = visible
  stats.visibleNo = visible.length
  stats.all = all
  stats.allNo = all.length
  stats.notPublic = notPubic
  stats.notPublicNo = notPubic.length
}

function getSeen (data) {
  var seen = []
  var remaining = []
  data.forEach(function (piece) {
    if (piece.Seen === 'Y') seen.push(piece.Name)
    else remaining.push(piece.Name)
  })
  stats.seen = seen
  stats.seenNo = seen.length
  stats.remaining = remaining
  stats.reminingNo = remaining.length - 2 // because not public
}
