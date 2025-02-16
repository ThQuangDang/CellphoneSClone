const mongoose = require( 'mongoose')

const Schema = mongoose.Schema;

const reviewProduct = new Schema({
  name: {type: String},
  comment: {type: String},
  star: {type: Number},
},{
  timestamps: true,
})

const replieCommentProduct = new Schema({
  content: {type: String},
  isAdmin: Boolean,
  nameUser: {type: String},
  byUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

const commentProduct = new Schema({
  author: {type: String},
  status: String,
  isAdmin: Boolean,
  avatar: {type: String},
  content: {type:String},
  byUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  replies: [replieCommentProduct]
})

const Product = new Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    salePrice: { type: Number, required: true },
    type: { type: String, required: true },
    image: { type: String },
    amount: Number,
    cloudinary_id: { type: String },

    rating: { type: Number },
    numReviews: { type: Number },
    blog: String,

    reviews: [reviewProduct],
    comments: [commentProduct],
  },
  {
    timestamps: true,
    strict: false
  }
);
Product.index({name: 'text'});

const ProductModel = mongoose.model("Product", Product)

module.exports = {
    ProductModel
}