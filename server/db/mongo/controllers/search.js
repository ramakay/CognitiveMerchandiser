var watson = require('watson-developer-cloud')

// Create the service wrapper
var nlClassifier = watson.natural_language_classifier({
  url: 'https://gateway.watsonplatform.net/natural-language-classifier/api',
  username: '7b9f35b0-783e-454f-9d2e-a617ff0643aa',
  password: 'vcJhCfaxBRUN',
  version: 'v1'

})

export function fetchClassification (req, res, next) {
  console.log('You sent...', req.body.text)
  var params = {
    classifier: process.env.CLASSIFIER_ID || '2a3230x98-nlc-157', // pre-trained classifier
    text: req.body.text
  }
  nlClassifier.classify(params, function (err, results) {
    if (err) {
      console.log('The error was', err)
      return next(err)
    } else {
      // console.log('The results are ', results)
      res.json(results)
    }
  })
}
export default {
fetchClassification}
// Call the pre-trained classifier with body.text
// Responses are json
