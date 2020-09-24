const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(
  "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"
);

const sendEmail = async (infos) => {
  const { email, name, message } = infos;

  const msg = {
    to: "contact@pesousa.dev",
    from: "pedro_de_sousa@outlook.com", // Use the email address or domain you verified above
    subject: "Vous avez un nouveau message de contact",
    text: "Vous avez un nouveau message de contact",
    html: `
    <h3>Contact Details</h3>
    <ul>  
      <li>Nom: ${name}</li>
      <li>Email: ${email}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
  `,
  };

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
