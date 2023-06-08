const nodemailer = require("nodemailer");
const { config } = require('../../config/config')
async function main() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: config.smtpServer,
    port: config.smtpPort,
    secure: config.smtpSecure, // true for 465, false for other ports
    auth: {
      user: config.mstpMail, // generated ethereal user
      pass: config.smtpPassword, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: config.mstpMail, // sender address
    to: "user@mail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello!!!!", // plain text body
    html: "<b>Hello this is a test!!!</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main();
