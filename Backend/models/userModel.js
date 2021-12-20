import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Plz enter name'],
      trim: true,
    },
    email: {
      type: Schema.Types.String,
      unique: [true, 'Email already in use'],
      required: [true, 'Plz enter email '],
      lowercase: true,
      trim: true,
    },

    location: {
      type: String,
    },
    password: {
      type: String,
      trim: true,
      minlength: 7,
    },
    mobileNumber: {
      type: Number,
      maxlength: [10, 'Plz enter a valid 10 digit number'],
      minlength: [10, 'Plz enter a valid 10 digit number'],
    },
    role: String, // client, vendor
    googleId: { type: String },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const maxTime = 3 * 24 * 60 * 60;
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString() },
    process.env.TOKEN_SECRET,
    { expiresIn: maxTime }
  );
  await user.save();

  return token;
};
// login using hash
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Unable to login u');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Unable to login');
  }
  return user;
};

// hashing the plain text password
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model('User', userSchema);

export default User;
