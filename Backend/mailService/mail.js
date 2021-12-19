import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import hbs from 'nodemailer-express-handlebars';
dotenv.config();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// transporter.use(
//   'compile',
//   hbs({
//     viewEngine: 'express-handlebars',
//     viewPath: "templates",
//     layoutsDir:"../views/"
//   })
// );

const userSignUp = async (email, name) => {
  let mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Martopia',
    text: `Hey ${name}! Welcome to Martopia!,`,
    // template: 'signup',
  };

  transporter.sendMail(mailOptions, function (error, data) {
    if (error) {
      console.log('error occured:', error);
    } else {
      console.log('signup email sent');
    }
  });
};

const userUpdate = async (email) => {
  let mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Account details modified: Anish's Artstore",
    text: 'Your account is successfully modified',
  };

  transporter.sendMail(mailOptions, function (error, data) {
    if (error) {
      console.log('error occured:', error);
    } else {
      console.log('user update mail sent');
    }
  });
};
const userPassword = async (email) => {
  let mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Password updated: Anish's artstore",
    text: 'Your account password was successfully modified ',
  };

  transporter.sendMail(mailOptions, function (error, data) {
    if (error) {
      console.log('error occured:', error);
    } else {
      console.log('Password reset mail sent');
    }
  });
};

export { userSignUp, userUpdate, userPassword };
