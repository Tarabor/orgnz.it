const fs = require('fs');

require.extensions['.html'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const CONFIG = require(`../../config/environment/${process.env.NODE_ENV}.js`);
console.log( CONFIG.mailProvider.mailAccount);
const API_KEY =  require(`../../${CONFIG.mailProvider.mailAccount}`).API_KEY;
const DOMAIN =  require(`../../${CONFIG.mailProvider.mailAccount}`).DOMAIN;
const mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});
const nodeMailer = require("nodemailer");
const EmailTemplate = require('email-templates').EmailTemplate;

const MailComposer = require('nodemailer/lib/mail-composer');

const testo = require('./views/html.html')

 
const mailOptions = {
    from: 'Orgnz.it! <me@samples.mailgun.org>',
    to: 'angelonicoladimartino@gmail.com, marco.taraborrelli@gmail.com, fraticelli.antonio@gmail.com',
    subject: 'Sei stato aggiunto ad una cerchia!',
    body: 'Test email text',
    html: testo
};
 
const mail = new MailComposer(mailOptions);
 

exports.sendInvitation = (req, res) => {

    mail.compile().build((err, message) => {
 
        const dataToSend = {
            to: 'angelonicoladimartino@gmail.com, marco.taraborrelli@gmail.com, fraticelli.antonio@gmail.com',
            message: message.toString('ascii')
        };
     
        mailgun.messages().sendMime(dataToSend, (sendError, body) => {
            if (sendError) {
                console.log(sendError);
            }
        });
    });
    
      res.send('Sent');
};
