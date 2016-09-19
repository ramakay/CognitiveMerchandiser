import { combineReducers } from 'redux'
import user from 'reducers/user'
import topic from 'reducers/topic'
import message from 'reducers/message'
import persona from 'reducers/persona'
import products from 'reducers/product'
import search from 'reducers/search'

import { routerReducer as routing } from 'react-router-redux'

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  user,
  topic,
  message,
  routing,
  persona,
  products,
search})

export default rootReducer
