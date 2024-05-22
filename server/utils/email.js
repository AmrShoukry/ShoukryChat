const nodemailer = require('nodemailer');
const path = require('path');
const dotenv = require('dotenv');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const pug = require('pug');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.GMAIL_MAIL,
    pass: process.env.GMAIL_PASS,
  },
});

async function sendEmail(to, templateData) {
  const html = pug.renderFile(path.join(__dirname, `email.pug`), templateData);

  await transporter.sendMail({
    from: {
      name: 'ShoukryChat',
      address: process.env.GMAIL_MAIL,
    },
    to: to, // list of receivers
    subject: templateData.subject, // Subject line
    text: templateData.content, // plain text body
    html: html, // html body
  });
}

module.exports = sendEmail;

// module.exports = class Email {
// constructor(user, url, token = null, newEmail = null) {
//   this.to = newEmail || user.email;
//   this.firstName = user.firstName;
//   this.url = url;
//   this.from = `Simple Media <${process.env.EMAIL_FROM}>`;
//   this.token = token;
//   this.email = user.email;
//   this.newEmail = newEmail || " ";
// }

// createTransport() {
//   if (process.env.NODE_ENV === "production") {
//     return nodemailer.createTransport({
//       service: "SendGrid",
//       auth: {
//         user: process.env.SENDGRID_USER,
//         pass: process.env.SENDGRID_PASS,
//       },
//     });
//   } else {
//     return nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: process.env.EMAIL_PORT,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });
//   }
// }

