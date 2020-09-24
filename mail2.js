const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(
  "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"
);

const msg = {
  to: "contact@pesousa.dev",
  from: "pedro_de_sousa@outlook.com", // Use the email address or domain you verified above
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

//ES8

const sendEmail = async (infos) => {
  const { email, name, message } = infos;
  try {
    await sgMail.send(msg);
    return { ok: true };
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};

module.exports = { sendEmail };
