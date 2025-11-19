import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Todos los campos son obligatorios.' }, { status: 400 });
    }

    const to = 'saraycueltan21@gmail.com';

    // 1) Intentar con Resend si hay API Key
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY && RESEND_API_KEY.trim().length > 0) {
      const resend = new Resend(RESEND_API_KEY);
      const { data, error } = await resend.emails.send({
        from: 'Contacto Web <onboarding@resend.dev>',
        to,
        replyTo: email,
        subject: `Nuevo mensaje de contacto - ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
        html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensaje:</strong></p><p>${String(message).replace(/\n/g, '<br/>')}</p>`,
      });

      if (error) {
        console.error('Error Resend:', error);
        return NextResponse.json({ error: 'No se pudo enviar el correo con Resend.' }, { status: 500 });
      }

      return NextResponse.json({ ok: true, id: data?.id, via: 'resend' });
    }

    // 2) Fallback a SMTP/Nodemailer si existen variables SMTP
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || '587', 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;

    if (!host || !user || !pass) {
      return NextResponse.json({
        error: 'Falta RESEND_API_KEY o configuración SMTP (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS).',
      }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    try {
      await transporter.verify();
    } catch (e) {
      console.error('Error verificación SMTP:', e);
      return NextResponse.json({ error: 'No se pudo conectar al servidor SMTP. Verifica host, puerto, usuario/contraseña y SMTP_SECURE.' }, { status: 500 });
    }

    const info = await transporter.sendMail({
      from: `Contacto Web <${user}>`,
      replyTo: email,
      to,
      subject: `Nuevo mensaje de contacto - ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensaje:</strong></p><p>${String(message).replace(/\n/g, '<br/>')}</p>`,
    });

    return NextResponse.json({ ok: true, messageId: info.messageId, via: 'smtp' });
  } catch (error) {
    console.error('Error enviando correo de contacto:', error);
    return NextResponse.json({ error: 'Error interno al enviar el mensaje.' }, { status: 500 });
  }
}