import nodemailer from "nodemailer";

const requiredFields = ["name", "email", "subject", "message"];

function json(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

function getMissingEnv() {
  const needed = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];
  return needed.filter((k) => !process.env[k]);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return json(res, 405, { error: "Method not allowed" });
  }

  const missing = getMissingEnv();
  if (missing.length > 0) {
    return json(res, 500, {
      error: `Email service is not configured. Missing: ${missing.join(", ")}`,
    });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const invalidField = requiredFields.find((field) => !String(body[field] || "").trim());
  if (invalidField) {
    return json(res, 400, { error: `Missing required field: ${invalidField}` });
  }

  const senderName = String(body.name).trim();
  const senderEmail = String(body.email).trim();
  const subject = String(body.subject).trim();
  const message = String(body.message).trim();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.verify();

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Sec(t) Infinity Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || "info@sectinfinity.com",
      replyTo: `${senderName} <${senderEmail}>`,
      subject: `[Website Contact] ${subject}`,
      text: [
        "New message from sectinfinity.com contact form",
        "",
        `Name: ${senderName}`,
        `Email: ${senderEmail}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New message from sectinfinity.com contact form</h2>
        <p><strong>Name:</strong> ${senderName}</p>
        <p><strong>Email:</strong> ${senderEmail}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return json(res, 200, { ok: true });
  } catch (error) {
    console.error("Contact email failed:", error);
    return json(res, 500, { error: "Unable to send email. Please try again." });
  }
}
