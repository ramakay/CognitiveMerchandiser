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
export function makePersonaRequest (method, id, data, api = '/persona/process') {
  return request[method](api + (id ? ('/' + id) : ''), data)
}

export function fetchWatsonStatusSuccess (data) {
  console.log(data)
}
export function fetchWatsonFailure (id, error) {
}

export function fetchWatsonStatus () {
  return dispatch => {
    return makeTopicRequest('get', id, {
    })
      .then(() => dispatch(fetchWatsonStatusSuccess(data)))
      .catch(() => dispatch(fetchWatsonFailure({id, error: "Oops! Something went wrong and we couldn't create Persona"})))
  }
}
