"use server";

import ContactFormEmail from "@/components/email/contact-email";
import { resend } from "@/lib/resend";

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: EmailData) {
  try {
    const result = await resend.emails.send({
      from: "Afrika Mosiaic <githakakaruri@afrika-mosaic.art>", // Replace with your verified domain
      to: process.env.CONTACT_EMAIL || "your-email@example.com",
      replyTo: data.email,
      subject: `New message from ${data.name}`,
      react: ContactFormEmail({
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    });

    if (result.error) {
      return { success: false, error: result.error.message };
    }

    return { success: true, data: result };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}
