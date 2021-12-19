import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import './config/passport-setup.js';

dotenv.config();
import db from './config/db.js';
await db();

import authRoute from './routes/authRoutes.js';
import requestRoute from './routes/requestRoute.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(passport.initialize());
app.use(morgan(':method :url :status :response-time ms'));

// Set up routes
app.use('/martopia/user', authRoute);
app.use('/martopia/request', requestRoute);
app.get('/', (req, res) => {
  res.send('Running');
});
app.get('/1', (req, res) => {
  res.send('Running failed');
});

// Listening on the given PORT
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started listening on ${PORT}`);
});
