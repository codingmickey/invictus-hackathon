import mongoose from 'mongoose';
import colors from 'colors';

const db = async () => {
  try {
    const conn = await mongoose.connect(
      //process.env.DB_CONNECT
      process.env.URI,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.bgWhite.black.bold
    );
  } catch (error) {
    console.log(error);
    console.error(`Mongo DB Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default db;
