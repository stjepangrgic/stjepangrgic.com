// @import url('https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700,800&display=swap');
// import 'https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700,800&display=swap'
import 'modern-normalize/modern-normalize.css';
import './styles/index.styl'

export default ({ router, setHead }) => {
  // Progress bar is not needed on server-side
  if (process.browser) {
    // These dependencies are only bundled in client build
    const nprogress = require('nprogress')
    require('nprogress/nprogress.css')

    const loaded = Object.create(null)

    router.beforeEach((to, from, next) => {
      if (!loaded[to.path]) {
        // Start progress bar before entering page
        nprogress.start()
      }
      next()
    })

    router.afterEach(to => {
      loaded[to.path] = true
      // Stop progress bar after entering page
      nprogress.done()
    })
  }
  setHead({
    // title: `${this.page.navbarTitle} - Stjepan Grgic`,
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700,800&display=swap'
      }
    ]
  })
}