var fs = require('fs')
var data = fs.readFileSync('assets/data.json').toString()

var stats = {}

writeStats()

function writeStats() {
  data = formatData(data)
  getCountries(data)
  getMusuems(data)
  getVisible(data)
  getSeen(data)
  fs.writeFileSync('assets/stats.json', 'var stats = ' + JSON.stringify(stats, null, ' '))
  console.log('✨\n')
}

function getCountries (data) {
  var visited = []
  var remaining = []
  data.forEach(function (visit) {
    // can't visit ones that aren't public
    if (!visit.public) return
    var country = visit.exhibitionCountry || visit.permanentCountry
    if (!visit.seen) pushUnique(remaining, country)
    else pushUnique(visited, country)
  })
  stats.visitedCountries = visited
  stats.visitedCountriesLength = visited.length
  stats.remainingCountries = remaining
  stats.remainingCountriesLength = remaining.length
}

function getMusuems (data) {
  var visited = []
  var remaining = []
  data.forEach(function (visit) {
    // can't visit ones that aren't public
    if (!visit.public) return
    var location = visit.exhibitionLocation || visit.permanentLocation
    if (!visit.seen) {
      pushUnique(remaining, location)
    }
    else pushUnique(visited, location)
  })
  stats.visitedMuseums = visited
  stats.visitedMuseumsLength = visited.length
  stats.remainingMuseums = remaining
  stats.remainingMuseumsLength = remaining.length
}

function getVisible (data) {
  var public = []
  var notPublic = []
  data.forEach(function (piece) {
    if (!piece.public) notPublic.push(piece.name)
    else public.push(piece.name)
  })
  stats.public = public
  stats.publicNo = public.length
  stats.all = public.concat(notPublic)
  stats.allLength = stats.all.length
  stats.notPublic = notPublic
  stats.notPublicLength = notPublic.length
}

function getSeen (data) {
  var seen = []
  var remaining = []
  var remainingPublic = []
  data.forEach(function (piece) {
    if (!piece.seen && piece.public) remainingPublic.push(piece.name)
    if (piece.seen) seen.push(piece.name)
    else remaining.push(piece.name)
  })
  stats.seen = seen
  stats.seenLength = seen.length
  stats.remaining = remaining
  stats.remainingPublic = remainingPublic
  stats.remainingLength = remaining.length
  stats.remainingPublicLength = remaining.length - 1 // minus not public pieces
}

function formatData (data) {
  return JSON.parse(data.replace('var vermeers = ', ''))
}

function pushUnique (array, item) {
  if (array.indexOf(item) < 0) array.push(item)
}
