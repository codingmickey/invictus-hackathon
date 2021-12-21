import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protect = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
    });

    if (!user) {
      throw new Error();
    }
    req.user = user;
    res.status(200).json({ msg: 'successful auth' });
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ error: 'plz authenticate' });
  }
};

export default protect;
