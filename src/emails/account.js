// Functions for sending Welcome and Cancelation email

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY});

const sendWelcomeEmail = (email,name) => {
    mg.messages.create('sandbox8f16c3bdbbaf4fe789d0daef066e04fb.mailgun.org', {
        from: "Ritik Raj <ritikraj240@gmail.com>",
        to: [email],
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    })
    .then(msg => console.log(msg))
    .catch(err => console.log(err));
}

const sendCancelationEmail = (email,name) => {
    mg.messages.create('sandbox8f16c3bdbbaf4fe789d0daef066e04fb.mailgun.org', {
        from: "Ritik Raj <ritikraj240@gmail.com>",
        to: [email],
        subject: "Sorry to see you go!",
        text: `Goodbye, ${name}. Hope to see you sometime soon.`,
    })
    .then(msg => console.log(msg))
    .catch(err => console.log(err));
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}