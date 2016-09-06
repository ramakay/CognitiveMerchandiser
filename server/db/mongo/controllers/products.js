import _ from 'lodash'
import Products from '../models/products'

/**
 * List
 */
export function fetchProducts (req, res) {
  // console.log('in FETCHPRODUCTS', Products.find({products: { $regex: /[0-9]/}}))
  // Products.find({products: { $regex: /[0-9]/}}).limit(5).exec((err, products) => {
  // {"products":1, "_id":0} 
  Products.find({}, {products: { $slice: 2 },_id: 0}).limit(5).exec((err, products) => {
    if (err) {
      console.log('Error in first query', err)
      return res.status(500).send('Something went wrong getting the data')
    } else {
      var finalProducts = []
      for (var i = products.length - 1; i >= 0; i--) {
        if (i < 5) finalProducts.push(products[i])
      }
      console.log(finalProducts)
    }
    return res.json(products)
  })
}

/**
 * Add a Topic
 */
export function add (req, res) {
  Products.create(req.body, (err) => {

    if (err) {
      console.log(err)
      return res.status(400).send(err)
    }

    return res.status(200).send('OK')
  })
}

/**
 * Update a topic
 */
export function update (req, res) {
  const query = { id: req.params.id }
  const isIncrement = req.body.isIncrement
  const isFull = req.body.isFull
  const omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull']
  const data = _.omit(req.body, omitKeys)

  if (isFull) {
    Product.findOneAndUpdate(query, data, (err) => {
      if (err) {
        console.log('Error on save!')
        return res.status(500).send('We failed to save for some reason')
      }

      return res.status(200).send('Updated successfully')
    })
  } else {
    Product.findOneAndUpdate(query, { $inc: { count: isIncrement ? 1 : -1 } }, (err) => {
      if (err) {
        console.log('Error on save!')
        return res.status(500).send('We failed to save for some reason')
      }

      return res.status(200).send('Updated successfully')
    })
  }
}

/**
 * Remove a topic
 */
export function remove (req, res) {
  const query = { id: req.params.id }
  Topic.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete')
      return res.status(500).send('We failed to delete for some reason')
    }

    return res.status(200).send('Removed Successfully')
  })
}

export default {
  fetchProducts,
  add,
  update,
remove}
