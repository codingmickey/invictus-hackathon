import vendor from '../models/vendorModel.js';

// Register as vendor
const Register = async (req, res) => {
  try {
    const newVendor = new vendor({
      ...req.body,
      name: req.user.name,
      email: req.user.email,
      mobileNumber: req.user.mobileNumber
        ? req.user.mobileNumber
        : req.body.mobileNumber,
      location: req.user.location ? req.user.location : req.body.location,
    });
    await newVendor.save();
    res.status(201).json({
      success: true,
      message: 'new User added successfully',
      newVendor,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export default Register;
