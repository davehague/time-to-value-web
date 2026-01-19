// server/api/sendEmail.ts
import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { toEmail, subject, htmlTemplate, _hp, _ts } = body;

  // Server-side anti-spam validation
  // Check honeypot field - should be empty
  if (_hp) {
    console.log('Spam blocked: honeypot filled');
    return { success: true, message: "Email sent successfully" }; // Fake success
  }

  // Check timestamp - form should take at least 3 seconds to fill
  if (_ts) {
    const elapsed = Date.now() - _ts;
    if (elapsed < 3000) {
      console.log('Spam blocked: submitted too fast', elapsed, 'ms');
      return { success: true, message: "Email sent successfully" }; // Fake success
    }
  }

  try {
    const request = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "dave@davehague.com",
            Name: "Time to Value Website Submission",
          },
          To: [
            {
              Email: `${toEmail}`,
              Name: `${toEmail}`,
            },
          ],
          Subject: `${subject}`,
          HTMLPart: `${htmlTemplate}`,
        },
      ],
    });

    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error(
      "Failed to send email with error:",
      error instanceof Error ? error.message : error
    );
    return {
      success: false,
      message: "Failed to send email",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
});
