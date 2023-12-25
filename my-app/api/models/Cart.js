const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema(
  {
    UserId: {
      type: String,
      required: true,
      unique: true,
    },
    products: [
      {
        productId:{
            tyep:String,
        },
        quantity:{
            type:Number,
            default:1
        }
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Cart", CartSchema);
