/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: { type: Number, min: 0 }
}, {collection: 'ProductDataFinal'})

// Compiles the schema into a model, opening (or creating, if
//	nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('Products', ProductSchema)
