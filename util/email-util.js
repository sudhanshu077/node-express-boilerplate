const nodemailer = require('nodemailer');
const fs = require("fs");
var hbs = require('nodemailer-express-handlebars');

exports.sendMail = (to, subject, template, context = null) => {

    // Use Smtp Protocol to send Email
    var smtpTransport = nodemailer.createTransport({
        host: 'server',
        port: 465,
        secure: true,
        auth: {
            user: "username",
            pass: "password"
        }
    });

    //attach the plugin to the nodemailer transporter
    let options = {
        viewEngine: {
            extname: '.hbs',
            layoutsDir:  'emails',
            defaultLayout : 'layout',
            partialsDir: 'emails/partials/'
        },
        viewPath: 'emails', //Path to email template folder
        extName: '.hbs' //extendtion of email template
    }
    
    smtpTransport.use('compile', hbs(options));

    var mail = {
        from: "test site <admin@test.com>",
        to: to,
        subject: subject + ' - Test',
        template: template,
        context: context
    }

    return new Promise((resolve, reject) => {
        let response = smtpTransport.sendMail(mail, function (error, response) {

            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log(response);
                resolve(response);
            }

            smtpTransport.close();
        });
    });

}