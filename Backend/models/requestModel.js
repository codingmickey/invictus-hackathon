import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const requestSchema = new Schema(
  {
    requestPlacer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    request: [
      {
        requestCategory: {
          type: String,
          // type: mongoose.Schema.Types.ObjectId,
          required: true,
          // ref: 'Category',
        },
        requestProduct: {
          type: String,
          // type: mongoose.Schema.Types.ObjectId,
          required: true,
          // ref: 'Product',
        },
        requestQuantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
    deliveryLocation: {
      type: String,
      required: true,
    },
    requestCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
requestSchema.path('request').validate(function (request) {
  if (!request) {
    return false;
  } else if (request.length === 0) {
    return false;
  }
  return true;
}, 'Minimum One category required to Request');

const Request = mongoose.model('request', requestSchema);

export default Request;
