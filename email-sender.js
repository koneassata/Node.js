// email-sender.js
const nodemailer = require('nodemailer');

// Configurez le transporteur
const transporter = nodemailer.createTransport({
  service: 'gmail', //ajout de l'email
  auth: {
    user: 'votre-email@gmail.com',
    pass: 'votre-mot-de-passe' // Utilisez un mot de passe d'application 
  }
});

// Configurez l'email
const mailOptions = {
  from: 'votre-email@gmail.com',
  to: 'destinataire@example.com',
  subject: 'Test Email',
  text: 'Hello, this is a test email sent from Node.js!'
};

// Envoyer l'email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
