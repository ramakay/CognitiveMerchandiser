import { GET_NLC_CLASSIFICATION, GET_PRODUCT_DATA, GET_PRODUCT_DATA_SUCCESS, GET_PRODUCT_DATA_FAILURE } from 'types'

export default function products (state = {src: []} , action) {
  switch (action.type) {
    case GET_NLC_CLASSIFICATION:
      // console.log('action', action.elems)
      return Object.assign({}, state, {
        elems: action.elems,
        keywords: action.keywords,
        NLCResponse: action.NLCResponse
      })
    case GET_PRODUCT_DATA_SUCCESS:
      // console.log('action..', action.elements)
      return Object.assign({}, state, {
        elements: action.elements
      })
    case GET_PRODUCT_DATA_FAILURE:
      console.log(action)
      return Object.assign({}, state, {
        isFetching: true
      })

    default:
      return state
  }
}
