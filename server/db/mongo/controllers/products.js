import _ from 'lodash'
import Products from '../models/products'

/**
 * List
 */
export function fetchProductsPost (req, res) {
  // console.log('You sent....this text', req.body, req.body.text)
  // console.log('This query', {Personality: req.body.text }, {products: 1,  _id: 0})
  // Products.find({Personality: req.body.text }, {products: 1,  _id: 0}).limit(100).exec((err, products) => {
  Products.find({}, {products: { $slice: 2 },_id: 0}).sort({rank: 1}).limit(500).exec((err, products) => {
    // console.log('Query returned...', products, req.body.text, typeof req.body.text)
    if (err) {
      console.log('Error in first query', err)
      return res.status(200).send('Something went wrong getting the data')
    }
    return res.json(products)
  })
}

export function fetchProducts (req, res) {
  // console.log('in FETCHPRODUCTS', Products.find({products: { $regex: /[0-9]/}}))
  // Products.find({products: { $regex: /[0-9]/}}).limit(5).exec((err, products) => {
  // {"products":1, "_id":0} 

  console.log('You sent....', req.text, typeof req.text)
  Products.find({'personality': req.text}, {products: { $slice: 2 },_id: 0}).sort({name: 1}).limit(500).exec((err, products) => {
    // Products.find({}, {products: { $slice: 2 },_id: 0}).limit(100).exec((err, products) => {
    if (err) {
      console.log('Error in first query', err)
      return res.status(500).send('Something went wrong getting the data')
    }
    console.log(products.length)
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
  fetchProductsPost,
  add,
  update,
remove}
