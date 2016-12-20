const Nightmare = require('nightmare')

module.exports = exports = ({show, url}, cb) => {
  const nightmare = Nightmare({ show })
  nightmare
    .goto(url)
    .wait('section.main-content div.page')
    .evaluate(() => {
      return {data: Array.from(document.querySelectorAll('section.main-content div.page'))
        .filter(page => page.querySelector('div.feedback img'))
        .map(page => page.querySelector('div.feedback img').src),
        title: document.querySelector('header.main-header h1 strong').textContent,
        course: document.querySelector('header.main-header div.h1-subhead').textContent}
    })
    .end()
    .then((result) => cb(null, result))
    .catch((error) => cb(error))
}
