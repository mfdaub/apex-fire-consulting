import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, agency, email, interest, message } = await req.json()

  try {
    await resend.emails.send({
      from: 'Apex Fire Consulting <onboarding@resend.dev>',
      to: 'mfdaub@gmail.com',
      replyTo: email,
      subject: `New Inquiry — ${agency}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #0f1e2e;">
          <div style="background: #0f1e2e; padding: 28px 32px;">
            <h1 style="color: #c9972b; margin: 0; font-size: 22px; letter-spacing: 1px;">
              Apex <span style="color: #ffffff;">Fire</span> Consulting
            </h1>
            <p style="color: rgba(255,255,255,0.5); margin: 4px 0 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">
              New Consultation Request
            </p>
          </div>

          <div style="padding: 32px; background: #faf8f4; border-left: 4px solid #c9972b;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(15,30,46,0.1); width: 140px;">
                  <strong style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #c9972b;">Name</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(15,30,46,0.1); font-size: 15px;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(15,30,46,0.1);">
                  <strong style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #c9972b;">Agency</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(15,30,46,0.1); font-size: 15px;">
                  ${agency}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(15,30,46,0.1);">
                  <strong style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #c9972b;">Email</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(15,30,46,0.1); font-size: 15px;">
                  <a href="mailto:${email}" style="color: #0f1e2e;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(15,30,46,0.1);">
                  <strong style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #c9972b;">Interest</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(15,30,46,0.1); font-size: 15px;">
                  ${interest}
                </td>
              </tr>
            </table>

            <div style="margin-top: 24px;">
              <strong style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #c9972b;">Message</strong>
              <p style="margin: 10px 0 0; font-size: 15px; line-height: 1.7; color: #0f1e2e; white-space: pre-wrap;">${message || '(no message provided)'}</p>
            </div>
          </div>

          <div style="background: #0f1e2e; padding: 16px 32px; text-align: center;">
            <p style="color: rgba(255,255,255,0.3); font-size: 11px; margin: 0; letter-spacing: 1px; text-transform: uppercase;">
              Reply directly to this email to respond to ${name}
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
