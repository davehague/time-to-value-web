// server/api/subscribe.ts
import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

const MAILJET_LIST_ID = 297950;

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, _hp, _ts } = body;

  // Server-side anti-spam validation
  // Check honeypot field - should be empty
  if (_hp) {
    console.log('Spam blocked: honeypot filled');
    return { success: true }; // Fake success
  }

  // Check timestamp - form should take at least 2 seconds to fill
  if (_ts) {
    const elapsed = Date.now() - _ts;
    if (elapsed < 2000) {
      console.log('Spam blocked: submitted too fast', elapsed, 'ms');
      return { success: true }; // Fake success
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return {
      success: false,
      error: "Please enter a valid email address",
    };
  }

  try {
    // Add contact to Mailjet list
    await mailjet
      .post("contactslist", { version: "v3" })
      .id(MAILJET_LIST_ID)
      .action("managecontact")
      .request({
        Email: email,
        Action: "addnoforce",
      });

    return { success: true };
  } catch (error) {
    console.error(
      "Failed to subscribe email:",
      error instanceof Error ? error.message : error
    );
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
});
