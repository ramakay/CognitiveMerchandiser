/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise'
import request from 'axios'
import md5 from 'spark-md5'
import * as types from 'types'
import { push } from 'react-router-redux'

export function makeContentRequest (method, id, data, api = '/search') {
  return request[method](api + (id ? ('/' + id) : ''), data)
}

export function initEntrySuccess (data) {
  console.log('THE Response IS >>>>>', data)
  return { type: types.GET_NLC_CLASSIFICATION_SUCCESS,
  searchTerm: data }
}
export function initEntryFailure (responseData) {
  return {
    type: types.GET_NLC_CLASSIFICATION_FAILURE,
    response: responseData
  }
}

export function initEntry (term) {
  return dispatch => {
    return makeContentRequest('post', '', {text: term}, '/processNLC')
      .then(
        (response) => {

          dispatch(push('/Products'))
          dispatch(initEntrySuccess(response.data))
        }
    )
      .catch((e) => dispatch(initEntryFailure({ errobj: e,error: "Oops! Something went wrong and we couldn't create Search"})))
  }
}
