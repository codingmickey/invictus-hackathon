import User from '../models/userModel.js';
import { userSignUp, userUpdate, userPassword } from '../mailService/mail.js';
const maxTime = 3 * 24 * 60 * 60;

// Register User
const register = async (req, res) => {
  try {
    const newUser = new User({ ...req.body });
    if (!req.body.password) {
      return res.status(400).json({
        success: false,
        message: 'Plz enter a password',
      });
    }
    await newUser.save();
    await userSignUp(req.body.email, req.body.name);
    const token = await newUser.generateAuthToken();
    // Sending the jwt token in a cookie🍪
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: maxTime * 1000,
    });
    res.redirect('http://localhost:3000/dashboard');
    // res.status(201).json({
    //   success: true,
    //   message: 'new User added successfully',
    //   newUser,
    //   token,
    // });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password,
    );
    const token = await user.generateAuthToken();
    // Sending the jwt token in a cookie🍪
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: maxTime * 1000,
    });

    res.redirect('http://localhost:3000/dashboard');
    // res.send({ user, token });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.cookie('jwt', '', { maxAge: 1 });
    // res.redirect('/');
    res.status(200).json({
      success: true,
      message: 'Logged out successfully',
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

// getting profile
const showMyProfile = async (req, res) => {
  try {
    const profile = await req.user;
    res.status(200).json({
      success: true,
      message: 'heres your profile',
      profile,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Updating your ID

const updateUser = async (req, res) => {
  try {
    const user = User.findById(req.user._id);
    const updateData = {
      ...req.body,
      password: req.body.password
        ? await bcrypt.hash(req.body.password, 8)
        : req.body.password,
    };

    updateData.password
      ? await userPassword(req.user.email)
      : await userUpdate(req.user.email);
    const found = await User.updateOne(
      user,
      { $set: updateData },
      { omitUndefined: 1 },
    );
    if (!found) {
      res.status(404).json({
        success: false,
        message: 'User not found',
      });
    } else {
      res.status(201).json({
        success: true,
        message: 'User updated sucessfully',
        updateData,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export { register, login, logoutUser, showMyProfile, updateUser };
