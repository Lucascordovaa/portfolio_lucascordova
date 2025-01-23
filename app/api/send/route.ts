
import { EmailTemplate } from '@/components/ui/email-template';
import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['lucascordova1000@gmail.com'],
      subject: 'New Message!',
      react: React.createElement(EmailTemplate, {data: await request.json()}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
