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
  functions.config().client.key,
  functions.config().clientsecret.key,
  'https://developers.google.com/oauthplayground'
);
myOAuth2Client.setCredentials({
  refresh_token: functions.config().refreshtoken.key,
});
const myAccessToken = myOAuth2Client.getAccessToken();

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'lotedivra@gmail.com',
    clientId: functions.config().client.key,
    clientSecret: functions.config().clientsecret.key,
    refreshToken: functions.config().refreshtoken.key,
    accessToken: myAccessToken,
  },
});

app.post('/', (req, res) => {
  console.log(req.body);
  const { name, email, message } = req.body;
  const mailOptionsToMe = {
    from: functions.config().user.key, // sender
    to: 'sairaj2119@gmail.com', // receiver
    subject: `A Message from ${name}`, // Subject
    html: `<p>${name}</p>
          <p>${email}</p>
          <p>${message}</p>
          `,
  };
  const mailOptionsToUser = {
    from: functions.config().user.key, // sender
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

exports.api = functions.https.onRequest(app);
