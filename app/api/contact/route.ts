import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  formType?: string;
  businessName?: string;
  name?: string;
  email?: string;
  phone?: string;
  businessType?: string;
  location?: string;
  website?: string;
  interest?: string;
  message?: string;

  // Suggestion-style forms
  suggestionName?: string;
  suggestionType?: string;
  suggestedBusiness?: string;
  suggestedPlace?: string;
  category?: string;
  link?: string;
  details?: string;

  // Honeypot
  company?: string;
};

function clean(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function field(label: string, value: unknown) {
  const cleaned = clean(value);
  if (!cleaned) return "";
  return `<p><strong>${label}:</strong> ${cleaned}</p>`;
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactPayload;

    // Simple honeypot. If a hidden "company" field is filled, silently accept.
    if (clean(body.company)) {
      return NextResponse.json({ ok: true });
    }

    const formType = clean(body.formType) || "Murfreesboro Guide Contact";
    const name = clean(body.name);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const businessName = clean(body.businessName);
    const message = clean(body.message) || clean(body.details);

    const suggestionName =
      clean(body.suggestionName) ||
      clean(body.suggestedBusiness) ||
      clean(body.suggestedPlace);

    const hasUsefulContent =
      name ||
      email ||
      phone ||
      businessName ||
      message ||
      suggestionName ||
      clean(body.website) ||
      clean(body.link);

    if (!hasUsefulContent) {
      return NextResponse.json(
        { error: "Please include at least one detail." },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "jlccustoms@gmail.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "noreply@hometownwebservicesar.cc";

    const subjectParts = [
      formType,
      businessName || suggestionName || name || "New message",
    ].filter(Boolean);

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 680px; line-height: 1.6; color: #1f2933;">
        <h2 style="margin-bottom: 8px;">${formType}</h2>
        <p style="margin-top: 0; color: #52606d;">New submission from the Murfreesboro Arkansas Guide.</p>

        <hr style="border: none; border-top: 1px solid #d9e2ec; margin: 20px 0;" />

        ${field("Business Name", body.businessName)}
        ${field("Suggested Name / Place", suggestionName)}
        ${field("Contact Name", body.name)}
        ${field("Email", body.email)}
        ${field("Phone", body.phone)}
        ${field("Business Type", body.businessType || body.suggestionType || body.category)}
        ${field("Location / Area", body.location)}
        ${field("Website / Facebook", body.website || body.link)}
        ${field("Interested In", body.interest)}

        ${
          message
            ? `
              <div style="margin-top: 18px;">
                <strong>Message:</strong>
                <div style="margin-top: 8px; white-space: pre-wrap; background: #f7f3ea; border: 1px solid #e6ddcc; padding: 14px; border-radius: 10px;">
                  ${message}
                </div>
              </div>
            `
            : ""
        }

        <hr style="border: none; border-top: 1px solid #d9e2ec; margin: 20px 0;" />

        <p style="font-size: 13px; color: #7b8794;">
          Sent from murfreesboro guide contact form.
        </p>
      </div>
    `;

    const text = `
${formType}

Business Name: ${businessName}
Suggested Name / Place: ${suggestionName}
Contact Name: ${name}
Email: ${email}
Phone: ${phone}
Business Type: ${clean(body.businessType || body.suggestionType || body.category)}
Location / Area: ${clean(body.location)}
Website / Facebook: ${clean(body.website || body.link)}
Interested In: ${clean(body.interest)}

Message:
${message}
    `.trim();

    const result = await resend.emails.send({
      from: `Murfreesboro Arkansas Guide <${fromEmail}>`,
      to: [toEmail],
      replyTo: email || undefined,
      subject: subjectParts.join(" - "),
      html,
      text,
    });

    if (result.error) {
      return NextResponse.json(
        { error: result.error.message || "Email failed to send." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong sending the message." },
      { status: 500 }
    );
  }
}