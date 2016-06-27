/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise'
import request from 'axios'
import md5 from 'spark-md5'
import * as types from 'types'

polyfill()

/*
 * Utility function to make AJAX requests using isomorphic fetch.
 * You can also use jquery's $.ajax({}) if you do not want to use the
 * /fetch API.
 * Note: this function relies on an external variable `API_ENDPOINT`
 *        and isn't a pure function
 * @param Object Data you wish to pass to the server
 * @param String HTTP method, e.g. post, get, put, delete
 * @param String endpoint
 * @return Promise
 */
export function makeContentRequest (method, id, data, api = '/persona/process') {
  return request[method](api + (id ? ('/' + id) : ''), data)
}

export function fetchWatsonFailure (id, error) {
  console.log('Fetch watson watson Failure', id, error)

  return {
    type: types.GET_WATSON_STATUS_FAILURE
  }
}
export function fetchWatsonStatusSuccess (data) {
  console.log('DATA>>>', data)
  return {
    type: types.GET_WATSON_STATUS_SUCCESS,
    payload: data
  }
}
export function typing (text) {
  return {
    type: types.TYPING,
    content: text
  }
}
export function createInsightSuccess (responseData) {
  return {
    type: types.CREATE_INSIGHT,
    response: responseData
  }
}
export function createInsightFailure (responseData) {
  return {
    type: types.CREATE_INSIGHT,
    response: responseData
  }
}

export function fetchInsight (text) {
  console.log('in fetchInsight', text)
  return dispatch => {
    return makeContentRequest('post', '', {inputText: text}, '/persona/process')
      .then(
        (response) => dispatch(createInsightSuccess(response.data))
    )
      .catch((e) => dispatch(createInsightFailure({ errobj: e,error: "Oops! Something went wrong and we couldn't create Persona"})))
  }
}

export function fetchWatsonStatus () {
  console.log('in getWatsonStatus')
  return dispatch => {
    return makeContentRequest('get', '', 'default', '/fetchStatus')
      .then(
        (response) => dispatch(fetchWatsonStatusSuccess(response.data))

    )
      .catch((e) => dispatch(fetchWatsonFailure({ errobj: e,error: "Oops! Something went wrong and we couldn't create Persona"})))
  }
}
