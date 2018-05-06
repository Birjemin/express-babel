class Controller {

  constructor(app) {
    Object.assign(this, {app})
    this.routes()
  }

  routes() {
    this.app.get('/api/setCookie', this.setCookie.bind(this))
    this.app.get('/api/getCookie', this.getCookie.bind(this))
    this.app.get('/api/setSession', this.setSession.bind(this))
    this.app.get('/api/getSession', this.getSession.bind(this))
  }

  setCookie(req, res) {
    if (!req.cookies.name) {
        res.cookie('name', 5, {maxAge: 60000})
    }
    res.send(res.helper.renderJson({result: res.cookies}))
  }

  getCookie(req, res) {
      res.send(res.helper.renderJson({result: req.cookies}))
  }

  setSession(req, res) {
      if (req.session.count) {
          req.session.count +=2
      } else {
          req.session.count = 2
      }
      res.send(res.helper.renderJson({result: req.session}))
  }

  getSession(req, res) {
      res.send(res.helper.renderJson({session: req.session}))
  }
}

export default Controller