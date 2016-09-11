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
export function makeProductRequest (method, id, data, api = '/productData') {
  return request[method](api + (id ? ('/' + id) : ''), data)
}

export function fetchProductSuccess (data) {
  // console.log('Fetch Product Success >>>>>>', data)

  return {
    type: types.GET_PRODUCT_DATA_SUCCESS,
    elements: data
  }
}
export function fetchWatsonFailure (id, error) {
  console.log('Fetch Product Failure', id, error)

  return {
    type: types.GET_PRODUCT_DATA_FAILURE
  }
}
// Fetch Products logic
export function fetchProducts () {
  console.log('Fetching product data')
  return dispatch => {
    return makeProductRequest('get', '', '', '/productData')
      .then(
        (response) => dispatch(fetchProductSuccess(response.data))
    )
      .catch((e) => dispatch(fetchProductFailure({ errobj: e,error: "Oops! Something went wrong and we couldn't create Persona"})))
  }
}
