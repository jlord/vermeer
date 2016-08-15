![screen shot 2016-08-08 at 9 43 13 am](https://cloud.githubusercontent.com/assets/1305617/17488161/e6802492-5d4c-11e6-8bbd-1fea4fed2776.png)

# #vermeergoals

**This is a for-funsies site I made about my quest to visit all of the paintings by Vermeer known and shown*.**

The site is pretty simple: four static pages, there isn't even a shared header :scream: but there is some fun data involved!

<small>* Fun facts: there are probably some Vermeers out there that the world doesn't know about yet and there is at least [one contested piece](http://www.essentialvermeer.com/catalogue/praxedis.html#.V7IjqWXB5aE). There is also [one that was stolen](http://www.essentialvermeer.com/catalogue/concert.html#.V7Ij2GXB5aE) (therefore not publicly shown) and [one that is privately owned](http://www.essentialvermeer.com/catalogue/baron_rolin.html#.V7Ij62XB5aE) (_sometimes_ publicly shown). </small>

## Data

I have a record of paintings and visits in this [Google spreadsheet](https://docs.google.com/spreadsheets/d/1PX5_V64YhlXWTtFpGPsUWow1wfwzTF1gh5benBXz8vw). I use [Sheetsee.js](http://jlord.us/sheetsee.js) to render them on the page—but not even enough of it, because I decided that since the data doesn't update frequently it's not worth it to fetch from Google each time. So I should simplify the templating _note to self_.

To get the data I use a [Node](https://nodejs.org) script to fetch the data from Google Spreadsheets via [Tabletop.js](http://npmjs.org/tabletop) when I want to update it: [`assets/js/index.js`](https://github.com/jlord/vermeer/blob/gh-pages/assets/js/index.js). This generates [`data.json`](https://github.com/jlord/vermeer/blob/gh-pages/assets/data.json). I then reorganize the data so that it's nicely formatted for the [stats.html](jlord.us/vermeers/stats) page with [`get-stats.js`](https://github.com/jlord/vermeer/blob/gh-pages/assets/stats.json). This generates [`stats.json`](https://github.com/jlord/vermeer/blob/gh-pages/assets/js/get-stats.js).

### Viewing/Using the site

Here are the options for cloning, using and viewing this site locally.

```bash
#
# Clone repository
git clone https://github.com/jlord/vermeer
#
# Go into repository
cd vermeer
#
# Install dependencies
npm install
#
# Update data.json
npm run data
#
# Update stats.json
npm run stats
#
# View locally
open index.html
```

## Thanks

Many thanks to the site [Essential Vermeer](http://www.essentialvermeer.com) which has been...essential...in my quest.
