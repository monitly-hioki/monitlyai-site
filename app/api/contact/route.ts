import type { NextRequest } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 0

function required(name: string): string {
  const v = process.env[name]
  if (!v) throw new Error(`ENV ${name} is required`)
  return v
}

function jstNowString() {
  const dtf = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
  return dtf.format(new Date())
}

function firstIpFromXff(xff: string | null) {
  if (!xff) return ""
  const first = xff.split(",")[0]?.trim() ?? ""
  return first
}

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      email,
      company,
      message,
      department = "",
      title = "",
      phone = "",
      category = "",
      phase = "",
      challenges = [],
      supports = [],
    } = await req.json()

    if (!name || !email || !company || !message) {
      return Response.json({ ok: false, error: "missing_fields" }, { status: 400 })
    }

    const HOST = required("SMTP_HOST")
    const PORT = Number(required("SMTP_PORT"))
    const USER = required("SMTP_USER")
    const PASS = required("SMTP_PASS")
    const FROM = process.env.SMTP_FROM || USER
    const TO = required("CONTACT_TO")
    const SECURE = PORT === 465

    const ua = req.headers.get("user-agent") || ""
    const xff = req.headers.get("x-forwarded-for")
    const ip = firstIpFromXff(xff)
    const ts = jstNowString()

    const transporter = nodemailer.createTransport({
      host: HOST,
      port: PORT,
      secure: SECURE,
      auth: { user: USER, pass: PASS },
      logger: process.env.NODE_ENV !== "production",
      debug: process.env.NODE_ENV !== "production",
    })

    await transporter.verify()

    const subjParts = [
      "【お問い合わせ】",
      category ? `${category} / ` : "",
      company,
      " / ",
      name,
      phase ? ` / ${phase}` : "",
    ]
    const subject = subjParts.join("")

    const lines = [
      `受信日時  : ${ts} (JST)`,
      `お名前    : ${name}`,
      `メール    : ${email}`,
      `会社名    : ${company}`,
      department ? `部署      : ${department}` : "",
      title ? `役職      : ${title}` : "",
      phone ? `電話      : ${phone}` : "",
      category ? `種別      : ${category}` : "",
      phase ? `フェーズ  : ${phase}` : "",
      challenges && challenges.length ? `課題      : ${challenges.join(", ")}` : "",
      supports && supports.length ? `希望支援  : ${supports.join(", ")}` : "",
      ip ? `送信IP    : ${ip}` : "",
      ua ? `UA        : ${ua}` : "",
      "----",
      message,
    ].filter(Boolean)

    const textBody = lines.join("\n")

    const htmlBody = `
<table cellpadding="0" cellspacing="0" style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,'Hiragino Kaku Gothic ProN','Noto Sans JP',Meiryo,sans-serif;font-size:14px;line-height:1.8;color:#111;width:100%;max-width:720px">
  <tr><td style="font-size:16px;font-weight:700;padding-bottom:8px">お問い合わせを受信しました</td></tr>
  <tr><td style="padding:12px;border:1px solid #e5e5e5;border-radius:8px;background:#fafafa">
    <div><b>受信日時</b>：${esc(ts)} (JST)</div>
    <div><b>お名前</b>：${esc(name)}</div>
    <div><b>メール</b>：${esc(email)}</div>
    <div><b>会社名</b>：${esc(company)}</div>
    ${department ? `<div><b>部署</b>：${esc(department)}</div>` : ""}
    ${title ? `<div><b>役職</b>：${esc(title)}</div>` : ""}
    ${phone ? `<div><b>電話</b>：${esc(phone)}</div>` : ""}
    ${category ? `<div><b>種別</b>：${esc(category)}</div>` : ""}
    ${phase ? `<div><b>フェーズ</b>：${esc(phase)}</div>` : ""}
    ${
      challenges && challenges.length
        ? `<div><b>課題</b>：<ul style="margin:6px 0 0 18px;padding:0">${challenges
            .map((c: string) => `<li>${esc(c)}</li>`)
            .join("")}</ul></div>`
        : ""
    }
    ${
      supports && supports.length
        ? `<div><b>希望支援</b>：<ul style="margin:6px 0 0 18px;padding:0">${supports
            .map((s: string) => `<li>${esc(s)}</li>`)
            .join("")}</ul></div>`
        : ""
    }
    ${ip ? `<div><b>送信IP</b>：${esc(ip)}</div>` : ""}
    ${ua ? `<div><b>UA</b>：${esc(ua)}</div>` : ""}
    <div style="margin-top:10px;border-top:1px dashed #ddd;padding-top:10px"><b>メッセージ</b><br>${esc(message).replace(/\n/g, "<br>")}</div>
  </td></tr>
</table>
`.trim()

    const info = await transporter.sendMail({
      from: `"Monitly.AI Contact" <${FROM}>`,
      to: TO,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    })

    return Response.json({ ok: true, messageId: info.messageId })
  } catch (err: any) {
    console.error("CONTACT_ERROR", err)
    return Response.json({ ok: false, error: String(err.message || err) }, { status: 500 })
  }
}
