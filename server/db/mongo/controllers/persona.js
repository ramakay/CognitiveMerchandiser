// input, process, result
var watson = require('watson-developer-cloud')
var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var ObjectId = require('mongodb').ObjectID
var url = 'mongodb://localhost/ReactWebpackNode'

var personality_insights = watson.personality_insights({
  username: 'd98a4bc0-8c3a-423c-9921-44257ec6e26b',
  password: 'hzCRQbO8nUbA',
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

  doWatsonRequest(obj)
}
export function doWatsonRequest (theText) {
  personality_insights.profile(theText, function (error, response) {
    // console.log(response, theText)
    if (error) {
      console.log('error:', error)
    } else {
      var personalityInsightsResults = JSON.stringify(response, null, 2)
      console.log(personalityInsightsResults)
      MongoClient.connect(url, function (err, db) {
        // Get the collection
        var col = db.collection('personalityInsightsCollection')
        col.insertOne({personalityInsightsResults}, function (err, r) {
          assert.equal(null, err)
          assert.equal(1, r.insertedCount)
          // Finish up test
          console.log(col.findOne())
          db.close()
        })
      })
    }
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
