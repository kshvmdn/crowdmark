const https = require('https')
const fs = require('fs')

module.exports = exports = (url, fp, cb) => {
  https.get(url, (res) => {
    res.pipe(fs.createWriteStream(fp))
    cb(null, fp)
  }).on('error', (e) => cb(e))
}
