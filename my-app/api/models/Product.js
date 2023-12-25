// postman schema
// {
//     "inStock": true,
//     "title": "test product 1",
//     "desc": "test 1",
//     "img": " test 1",
//     "categories": [
//         "accesories",
//         "men"
//     ],
//     "size": [
//         "S",
//         "M",
//         "L",
//         "XL"
//     ],
//     "color": [
//         "red",
//         "black",
//         "yellow"
//     ],
//     "price": 2000
// }
const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
      unique: false,
    },
    img: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
    },
    size: {
      type: Array,
    },
    color: {
      type: Array,
    },
    price: {
      type: Number,
      required: true,
    },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
