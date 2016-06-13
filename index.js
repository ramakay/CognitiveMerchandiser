var watson = require('watson-developer-cloud')

var alchemy_language = watson.alchemy_language({
  api_key: {
    'credentials': {
      'url': 'https://gateway-a.watsonplatform.net/calls',
      'note': 'It may take up to 5 minutes for this key to become active',
      'apikey': '05fad9d3f61ed058fe9c9f6c0f4666c951eac549'
    }
  }

})

var params = {
  text: 'IBM Watson won the Jeopardy television show hosted by Alex Trebek'
}

alchemy_language.sentiment(params, function (err, response) {
  if (err)
    console.log('error:', err)
  else
    console.log(JSON.stringify(response, null, 2))
})
