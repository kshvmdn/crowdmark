const path = require('path')
const mkdirp = require('mkdirp')

const download = require('./utils/download')
const scrape = require('./utils/scrape')

const BASE_URL = 'https://app.crowdmark.com/score'

module.exports = exports = (opts) => {
  return new Promise((resolve, reject) => {
    mkdirp(opts.path, (err) => {
      if (err) return reject(err)
    })

    for (let id of opts.ids) {
      let url = `${BASE_URL}/${id}`

      scrape({ show: opts.show, url }, (err, res) => {
        if (err) {
          return reject(err)
        }

        let scoreDirectory = path.join(opts.path, id)

        mkdirp(scoreDirectory, (err) => {
          if (err) return reject(err)
        })

        res.forEach((src, i) => {
          download(src, path.join(scoreDirectory, `${i}.png`), (err, path) => {
            if (err) return reject(err)
          })
        })
      })
    }
  })
}

