import { TYPING, GET_WATSON_STATUS, GET_WATSON_STATUS_SUCCESS, GET_WATSON_STATUS_FAILURE, CREATE_INSIGHT, CREATE_INSIGHT_SUCCESS } from 'types'

export default function persona (state = {content: []} , action) {
  switch (action.type) {
    case GET_WATSON_STATUS_SUCCESS:
      console.log('ACTION PAYLOAD via insights reducer>>>', action, action.payload.Watson)
      return Object.assign({}, state, {
        isFetching: true,
        status: action.payload.Watson
      })
    case GET_WATSON_STATUS_FAILURE:
      console.log(action)
      return Object.assign({}, state, {
        isFetching: true
      })
    case CREATE_INSIGHT:
      console.log('action..', action)
      return Object.assign({}, state, {
      })
    case TYPING:
      console.log(action)
      return Object.assign({}, state, {
        isFetching: true
      })
    default:
      return state
  }
}
