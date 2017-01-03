const Nightmare = require('nightmare')

module.exports = exports = ({show, url}, cb) => {
  const nightmare = Nightmare({ show })
  nightmare
    .goto(url)
    .wait('section.main-content div.page')
    .evaluate(() => {
      let data = Array.from(document.querySelectorAll('section.main-content div.page'))
                      .filter(page => page.querySelector('div.feedback img'))
                      .map(page => page.querySelector('div.feedback img').src)

      let title = document.querySelector('header.main-header h1 strong').textContent
      let course = document.querySelector('header.main-header div.h1-subhead').textContent

      return { data, title, course }
    })
    .end()
    .then((result) => cb(null, result))
    .catch((error) => cb(error))
}
