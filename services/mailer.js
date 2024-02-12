const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD,
  },
});

const mail = async (email, subject, text) => {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"Book Management System" ${process.env.USERNAME}`, // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: `<b>${text}</b>`, // html body
  });

  return info;
  //
};

module.exports = { mail };
