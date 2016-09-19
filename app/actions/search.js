/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise'
import request from 'axios'
import md5 from 'spark-md5'
import * as types from 'types'
import { push } from 'react-router-redux'

export function makeContentRequest (method, id, data, api = '/search') {
  return request[method](api + (id ? ('/' + id) : ''), data)
}

export function initEntrySuccess (data, keywordData, NLCData) {
  console.warn(keywordData, NLCData)
  return { type: types.GET_NLC_CLASSIFICATION,
    elems: data,
    keywords: keywordData,
  NLCResponse: NLCData}
}
export function fetchProductsNLC (data) {
  const topClass = data.top_class
  return dispatch => {
    return makeContentRequest('post', '', {text: topClass}, '/productData')
      .then(
        (response) => {
          // console.log('IN  fetching products', response.data)
          return dispatch(initEntrySuccess(response.data, topClass, data))
        }
    )
      .then(
        (response) => {
          dispatch(push('/Products'))
        }
    )

      .catch((e) => dispatch(initEntryFailure({ errobj: e,error: "Oops! Something went wrong and we couldn't create Search"})))
  }
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
          // console.log('NLC Performed, now fetching products')
          dispatch(fetchProductsNLC(response.data))
        }
    )
      .catch((e) => dispatch(initEntryFailure({ errobj: e,error: "Oops! Something went wrong and we couldn't create Search"})))
  }
}
