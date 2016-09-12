/* eslint consistent-return: 0, no-else-return: 0*/
import * as types from 'types'

export function waiting () {
  return { type: types.DISMISS_MESSAGE }
}
export function fetchAnalysis () {
  return { type: types.GET_INSIGHT_ANALYSIS }
}
export function fetchAnalysisSuccess () {
  return { type: types.GET_INSIGHT_ANALYSIS_SUCCESS }
}
export function fetchAnalysisFailure () {
  return { type: types.GET_INSIGHT_ANALYSIS_SUCCESS }
}
