import jwt from 'jsonwebtoken';

const verify = (req, res) => {
  const token = req.cookies.jwt;
  console.log(`From the file authVerify ${token}`);

  if (token) {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    res.status(201).send({ msg: 'Access Granted' });
  } else {
    res.status(400).send({ msg: 'Access Denied' });
  }
};

export default verify;
