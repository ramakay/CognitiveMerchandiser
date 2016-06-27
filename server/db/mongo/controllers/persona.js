// input, process, result
var watson = require('watson-developer-cloud')

var personality_insights = watson.personality_insights({
  username: '53d0db34-254e-4438-8a34-d05e7033e810',
  password: 'JRyuBFvivuQT',
  version: 'v2',
  url: 'https://gateway.watsonplatform.net/personality-insights/api',
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
  console.log('input Text>>>>', inputText)
  personality_insights.profile({
    text: inputText,
  language: 'en' },
    function (err, response) {
      if (err) {
        console.log('error:', err)
      } else {
        console.log('System resppnse', err, response)
        let response = JSON.stringify(response, null, 2)
        res.json(response)
      }
    })
}
export function resultWatsonRequest (req, res, next) {
  res.send('input')
}

export default {
  fetchStatus,
  inputWatsonRequest,
  processWatsonRequest,
resultWatsonRequest}
