const functions = require('firebase-functions');
const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

app.use(cors({ origin: true }));
app.use(express.json());

const myOAuth2Client = new OAuth2(
  '717967529834-694sehmfju2035i3h8de6a1f6rmsb0t2.apps.googleusercontent.com',
  'jsCWlIoUTsoPZA7ke3lD6Kk_',
  'https://developers.google.com/oauthplayground'
);
myOAuth2Client.setCredentials({
  refresh_token:
    '1//04UOCVgYXpHkGCgYIARAAGAQSNwF-L9IrZcNjdKmt1--dMgdtAzRdUASUvblWuQr0eLgwg4STAZNt6mTCUGT1q3oJe-rkb92WLe0',
});
const myAccessToken = myOAuth2Client.getAccessToken();

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'lotedivra@gmail.com',
    clientId:
      '717967529834-694sehmfju2035i3h8de6a1f6rmsb0t2.apps.googleusercontent.com',
    clientSecret: 'jsCWlIoUTsoPZA7ke3lD6Kk_',
    refreshToken:
      '1//04UOCVgYXpHkGCgYIARAAGAQSNwF-L9IrZcNjdKmt1--dMgdtAzRdUASUvblWuQr0eLgwg4STAZNt6mTCUGT1q3oJe-rkb92WLe0',
    accessToken: myAccessToken,
  },
});

app.get('/', (req, res) => {
  res.send('this is root');
});

app.post('/', (req, res) => {
  console.log(req.body);
  const { name, email, message } = req.body;
  const mailOptionsToMe = {
    from: 'lotedivra@gmail.com', // sender
    to: 'sairaj2119@gmail.com', // receiver
    subject: `A Message from ${name}`, // Subject
    html: `<p>${name}</p>
          <p>${email}</p>
          <p>${message}</p>
          `,
  };
  const mailOptionsToUser = {
    from: 'lotedivra@gmail.com', // sender
    to: email, // receiver
    subject: `A Message from Sairaj`, // Subject
    html: `<p>Thank You for contacting me</p>
          <p>I will reach you soon. Have a good time</p>
          `,
  };
  transport.sendMail(mailOptionsToMe, (err, result) => {
    if (err) {
      res.json({
        message: err,
      });
    } else {
      transport.close();
      res.json({
        message: 'Email has been sent: check your inbox!',
      });
    }
  });
  transport.sendMail(mailOptionsToUser, (err, result) => {
    if (err) {
      res.json({
        message: err,
      });
    } else {
      transport.close();
      res.json({
        message: 'Email has been sent: check your inbox!',
      });
    }
  });
});

app.get('/app', (req, res) => {
  res.send('this is another');
});
exports.api = functions.https.onRequest(app);
