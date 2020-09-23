const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  auth: {
    user: "pedro_de_sousa@outlook.com",
    pass: "Arches2015$",
  },
  tls: {
    ciphers: "SSLv3",
  },
});

const sendEmail = async (infos) => {
  const { email, name, message } = infos;

  const output = `
  <p>Vous avez un nouveau message de contact</p>
  <h3>Contact Details</h3>
  <ul>  
    <li>Nom: ${name}</li>
    <li>Email: ${email}</li>
  </ul>
  <h3>Message</h3>
  <p>${message}</p>
`;

  try {
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: "pedro_de_sousa@outlook.com",
      subject: "Contact Form",
      html: output,
    });
    return { ok: true };
  } catch (error) {
    console.log("ERROR", error);
  }
};

module.exports = { sendEmail };
