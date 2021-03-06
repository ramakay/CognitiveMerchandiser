/**
 * Routes for express app
 */
var bodyParser = require('body-parser')
import passport from 'passport'
import unsupportedMessage from '../db/unsupportedMessage'
import { controllers, passport as passportConfig } from '../db'

const usersController = controllers && controllers.users
const topicsController = controllers && controllers.topics
const personaController = controllers && controllers.persona
const productController = controllers && controllers.products
const searchController = controllers && controllers.search

export default (app) => {
  // user routes
  if (usersController) {
    app.post('/login', usersController.login)
    app.post('/signup', usersController.signUp)
    app.post('/logout', usersController.logout)
  } else {
    console.warn(unsupportedMessage('users routes'))
  }

  if (passportConfig && passportConfig.google) {
    // google auth
    // Redirect the user to Google for authentication. When complete, Google
    // will redirect the user back to the application at
    // /auth/google/return
    // Authentication with google requires an additional scope param, for more info go
    // here https://developers.google.com/identity/protocols/OpenIDConnect#scope-param
    app.get('/auth/google', passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    }))

    // Google will redirect the user to this URL after authentication. Finish the
    // process by verifying the assertion. If valid, the user will be logged in.
    // Otherwise, the authentication has failed.
    app.get('/auth/google/callback',
      passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
      })
    )
  }

  // topic routes
  if (topicsController) {
    app.get('/topic', topicsController.all)
    app.post('/topic/:id', topicsController.add)
    app.put('/topic/:id', topicsController.update)
    app.delete('/topic/:id', topicsController.remove)
  } else {
    console.warn(unsupportedMessage('topics routes'))
  }

  // topic routes
  if (personaController) {
    app.use(bodyParser.urlencoded({
      extended: true
    }))
    app.use(bodyParser.text())
    app.post('/persona/process', personaController.processWatsonRequest)
    app.get('/persona/result', personaController.resultWatsonRequest)
    app.get('/fetchStatus', personaController.fetchStatus)
  } else {
    console.warn(unsupportedMessage('Persona routes'))
  }
  if (productController) {
    app.post('/productData', productController.fetchProductsPost)
    app.get('/productData', productController.fetchProducts)
  } else {
    console.warn(unsupportedMessage('topics routes'))
  }
  if (searchController) {
    app.post('/processNLC', searchController.fetchClassification)
  } else {
    console.warn(unsupportedMessage('search routes'))
  }
}
