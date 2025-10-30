import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

function required(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`ENV ${name} is required`);
  return v;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message, department = "", title = "" } = await req.json();
    if (!name || !email || !company || !message) {
      return Response.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    const HOST = required("SMTP_HOST");
    const PORT = Number(required("SMTP_PORT"));
    const USER = required("SMTP_USER");
    const PASS = required("SMTP_PASS");
    const FROM = process.env.SMTP_FROM || USER;
    const TO = required("CONTACT_TO");
    const SECURE = PORT === 465;

    const transporter = nodemailer.createTransport({
      host: HOST,
      port: PORT,
      secure: SECURE,
      auth: { user: USER, pass: PASS },
      logger: process.env.NODE_ENV !== "production",
      debug: process.env.NODE_ENV !== "production",
    });

    await transporter.verify();

    const subject = `【お問い合わせ】${company} / ${name}`;
    const text = [
      `お名前    : ${name}`,
      `メール    : ${email}`,
      `会社名    : ${company}`,
      department ? `部署      : ${department}` : null,
      title ? `役職      : ${title}` : null,
      `----`,
      message,
    ].filter(Boolean).join("\n");

    const info = await transporter.sendMail({
      from: `"Monitly.AI Contact" <${FROM}>`,
      to: TO,
      replyTo: email,
      subject,
      text,
    });

    return Response.json({ ok: true, messageId: info.messageId ?? null });
  } catch (e: any) {
    return Response.json({ ok: false, error: e?.message ?? "send_failed" }, { status: 500 });
  }
}
