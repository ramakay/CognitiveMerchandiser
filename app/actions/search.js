/* eslint consistent-return: 0, no-else-return: 0*/
import * as types from 'types'

export function initEntry (term) {
  console.log(term)
  return { type: types.GET_SEARCH_ENGINE_TERM,
  searchTerm: term }
}
