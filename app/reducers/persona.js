import { TYPING, CREATE_INSIGHT_SUCCESS, GET_WATSON_STATUS, GET_WATSON_STATUS_SUCCESS, GET_WATSON_STATUS_FAILURE, CREATE_INSIGHT } from 'types'

export default function persona (state = {content: []} , action) {
  switch (action.type) {
    case GET_WATSON_STATUS_SUCCESS:
      console.log('ACTION PAYLOAD>>>', action, action.payload)
      return Object.assign({}, state, {
        isFetching: true,
        status: action.payload.Watson
      })
    case GET_WATSON_STATUS_FAILURE:
      console.log(action)
      return Object.assign({}, state, {
        isFetching: true
      })
    case CREATE_INSIGHT_SUCCESS:
      console.log('CREATE INSIGHT SUCCESS..', action)
      return Object.assign({}, state, {
        insightResults: action.response
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
