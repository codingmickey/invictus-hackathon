import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const vendorSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: Schema.Types.String,
    },

    location: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      max: 5,
      min: 1,
    },
    productsSellerCat: {
      type: Array,
      required: true,
    },
    isCertified: {
      type: Boolean,
    },
    buisnessName: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    reviews: [{ type: String }],
  },
  { timestamps: true }
);

const Vendor = mongoose.model('Vendor', vendorSchema);
export default Vendor;
