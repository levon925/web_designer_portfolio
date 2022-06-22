require('dotenv').config()
const nodeMailer = require('nodemailer'),
      { google } = require('googleapis'),
      OAuth2 = google.auth.OAuth2,
      userName = 'new.request.sender@gmail.com',
      clienID = '185435706239-jpbhnukgnfg92f99ustmtemdb3k1mbva.apps.googleusercontent.com',
      clientSECRET = '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',
      refreshTOKEN = '1//04znAj96t_wCZCgYIARAAGAQSNwF-L9IrFmYraXaqMbVUXpmsGFEWD3_9ZS0-V2YYWtpbTW_miFpiL-Vt7kJkLapj7wOUFYJbSuE',
      OAuth2_client = new OAuth2(clienID,clientSECRET);
      OAuth2_client.setCredentials({ refresh_token: refreshTOKEN })

      function send_mail(name, recipient) {
        const accessToken = OAuth2_client.getAccessToken();


        const  transport = nodeMailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: userName,
                    clientId: clienID,
                    clientSecret: clientSECRET,
                    refreshToken: refreshTOKEN,
                    accessToken: accessToken
                }
        })

        const mail_options = {
            from: `${userName}`,
            to: recipient,
            subject: 'New request from your website!',
            text: get_html_message(name)
        }

        transport.sendMail(mail_options, function(error, result) {
            if(error) {
                console.log('ERROR: ', error);
            } else {
                console.log('SUCCESS: ', result);
            }
            transport.close()
        })


      }

      function get_html_message(name) {
        return `<h3>${name}! You are Awesome!</h3>`
      }

      send_mail('Levon','levon16.01.99@gmail.com')







// const transporter = nodeMailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD
//     }
// })

// const mailOptions = {
//     from: 'new.request.sender@gmail.com',
//     to: 'levon16.01.99@gmail.com',
//     subject: 'New request from your website!',
//     text: 'Текст письма'
// }

// transporter.sendMail(mailOptions)