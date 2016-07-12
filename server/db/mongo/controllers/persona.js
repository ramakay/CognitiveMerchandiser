// input, process, result
var watson = require('watson-developer-cloud')

var personality_insights = watson.personality_insights({
  username: '2e0ea521-cb95-4dc8-8490-75801cdc7243',
  password: 'DJ7iRNWEjlTb',
  version: 'v2'
})

/**
 * GET /input
 */
export function fetchStatus (req, res, next) {
  res.json({'Watson': 'Watson Service  Active'})
}

export function inputWatsonRequest (req, res, next) {
  res.send({'hell3o': 'he3llo'})
}
export function processWatsonRequest (req, res, next) {
  var inputText = req.body.inputText
  //   "contentItems": [
  var obj = JSON.parse(' {"contentItems": [' + req.body.inputText + ']}')
  // obj.content = inputText
  obj.contenttype = 'text/plain'
  console.log(obj)
  JSON.stringify(obj)

  doWatsonRequest(obj)
}
export function doWatsonRequest (theText) {
  personality_insights.profile(theText, function (error, response) {
    console.log(response, theText)
    if (error)
      console.log('error:', error)
    else
      console.log(JSON.stringify(response, null, 2))
  }
  )
}
export function resultWatsonRequest (req, res, next) {
  res.send('input')
}

export default {
  fetchStatus,
  inputWatsonRequest,
  processWatsonRequest,
resultWatsonRequest}
