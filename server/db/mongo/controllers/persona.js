// input, process, result
import { db } from '../constants'
var watson = require('watson-developer-cloud')
var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var ObjectId = require('mongodb').ObjectID
var url = db
var mongoose = require('mongoose')
var jsonQuery = require('json-query')

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

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
/**
 * 
 * Profile {
tree (TraitTreeNode): Detailed results for a specific characteristic of the input text. ,
id (string): The unique user identifier for which these characteristics were computed. The value is derived from the userid field of the input ContentItem objects. The field is passed as-is from JSON input. Sanitize the contents of the field before displaying them to prevent cross-site scripting attacks. ,
source (string): The source identifier for which these characteristics were computed. The value is derived from the sourceid field of the input ContentItem objects. The field is passed as-is from JSON input. Sanitize the contents of the field before displaying them to prevent cross-site scripting attacks. ,
processed_lang (string): The language model that was used to process the input; for example, en. ,
word_count (integer): The number of words that were found in the input. ,
word_count_message (string, optional): When guidance is appropriate, a string that provides a message that indicates the number of words found and where that value falls in the range of required or suggested number of words. ,
warnings (Array[Warning]): Warning messages associated with the input text submitted with the request. The array is empty if the input generated no warnings.
}
 * @type {[type]}
 */
var personalitySchema = new Schema({
  personality: Object,
  needs: Object,
  values: Object
})
var personalityMongoModel = mongoose.model('personalityMongoModel', personalitySchema)
export function doWatsonRequest (theText) {
  personality_insights.profile(theText, function (error, response) {
    // console.log(response, theText)
    if (error) {
      console.log('error:', error)
    } else {
      var personalityInsightsResults = JSON.stringify(response, null, 2)
      // var schema = GenerateSchema.generic(personalityInsightsResults)
      // console.log(schema)
      // MongoClient.connect(url, function (err, db) {
      //   // Get the collection
      //   var col = db.collection('personalityInsightsCollectionNew')
      //   col.insertOne({personalityInsightsResults}, function (err, r) {
      //     assert.equal(null, err)
      //     assert.equal(1, r.insertedCount)
      //     // Finish up test
      //     var cursor = col.find()
      //     console.log('**** Cursor**** >>>>', cursor)
      //     cursor.each(function (err, doc) {
      //       assert.equal(err, null)
      //       if (doc != null) {
      //         console.log('****Starting****')
      //         console.dir(doc)
      //       } else {
      //         console.log('****No Results****')
      //       }
      //     })
      //   })
      // // db.close()
      // })
      /* TODO: Modify this lookup by Name */
      var personalityResponse = response.tree.children[0]
      var needsResponse = response.tree.children[1]
      var valuesResponse = response.tree.children[2]
      var personalityModelInstance = new personalityMongoModel({personality: personalityResponse })
      var needsModelInstance = new personalityMongoModel({needs: needsResponse })
      var valuesModelInstance = new personalityMongoModel({values: valuesResponse })
      var queryOpenness = jsonQuery('personality[][name=Openness]', {data: personalityModelInstance})
      console.warn(queryOpenness.value.percentage)
      console.log('********')
    // console.warn(jsonQuery('personality[][name=Openness]', {data: personalityModelInstance}), needsModelInstance, valuesModelInstance)
    }
  })
}
export function queryConstruct (dataHeap, dataNode, queryType, value) {
  var queryStr = dataNode + '[][' + queryType + '=' + value + ']'
  jsonQuery.call(queryStr, '{data:' + dataHeap + '}')
}
export function resultWatsonRequest (req, res, next) {
  res.send('input')
}

export default {
  fetchStatus,
  inputWatsonRequest,
  processWatsonRequest,
resultWatsonRequest}
