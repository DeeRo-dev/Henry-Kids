const sgMail = require("@sendgrid/mail");
//esta es la api-key de sendgrid.
SENDGRID_API_KEY = "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";
sgMail.setApiKey(SENDGRID_API_KEY);

async function sendMail(to, subject, content, type) {
  let mailType = "text/html";
  if (type === "text") {
    mailType = "text/plain";
  }

  const msg = {
    personalizations: [
      {
        to: [
          {
            email: to,
          },
        ],
      },
    ],
    from: {
      email: "henrykids.pg08@gmail.com",
    },
    subject: subject,
    content: [
      {
        type: mailType,
        value: content,
      },
    ],
  };

  try {
    await sgMail.send(msg);
  } catch (err) {
    return { error: err.message };
  }

  return { success: true };
}

module.exports = {
  sendMail,
};
