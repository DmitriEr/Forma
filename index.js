import password from './index.js';
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/', () => {
  resizeBy.send('welcome to my forma')
})

app.post('/api/forma', (req, res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: 'dmitrierk@gmail.com',
      pass: password
    }
  });

  let mailOptions = {
    from: data.userMail,
    to: 'dmitrierk@gmail.com',
    subject: `Тестовое задание, заказ забора ${data.userCount}`,
    html: `
      <h3>Informations</h3>
      <ul>
        <li>Name: ${data.userName}</li>
        <li>Email: ${data.userMail}</li>
        <li>Order: ${data.userCount}</li>
      </ul>

      <h3>Message</h3>
      <p>${data.message}</p>
    `
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {

    if(error) {
      res.send(error)
    } else {
      res.send('Success')
    }
  });

  smtpTransport.close();
})

const PORT =  process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server starting at port ${PORT}`);
})