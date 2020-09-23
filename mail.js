const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "itmemario2012@gmail.com",
    pass: "Arches2019$",
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
