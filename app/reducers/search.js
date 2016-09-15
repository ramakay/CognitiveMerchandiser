import { GET_NLC_CLASSIFICATION_FAILURE, GET_NLC_CLASSIFICATION_SUCCESS } from 'types'

export default function search (state = {content: []} , action) {
  switch (action.type) {
    case GET_NLC_CLASSIFICATION_SUCCESS:
      console.log('ACTION PAYLOAD>>>', action, action.searchTerm)
      return Object.assign({}, state, {
        searchTerm: action.searchTerm
      })
    default:
      return state
  }
}
