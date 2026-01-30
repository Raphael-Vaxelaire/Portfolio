import Header from "@/components/Header";
import styles from "@/components/Acceuil/acceuil.module.css";
import { Gabarito400, Gabarito700 } from "@/fonts/fonts";
import { Resend } from "resend";
import React from 'react';
import { EmailTemplate } from '@/components/Contact/email';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export default function EmailPage() {
  // Server action
  async function send(formData: FormData) {
    'use server';

    const email = formData.get('email') as string;
    const objet = formData.get('objet') as string;
    const contenu = formData.get('contenu') as string;

    try {
      const data = await resend.emails.send({
  from: "test@resend.dev",           // email vérifié Resend
  to: ['raphael.vaxelaire10@gmail.com'],
  // @ts-ignore 
  reply_to: email,                   // ici l'email de l'utilisateur
  subject: objet,
  react: React.createElement(EmailTemplate, { firstName: contenu, userEmail: email }),
});

      console.log('Email sent:', data);
    } catch (error: any) {
      console.error('Error sending email:', error);
    }
  }

  return (
    <>
      <Header />
      <form action={send}>
        <input type="email" name="email" placeholder="email" required />
        <input type="text" name="objet" placeholder="objet" required />
        <input type="text" name="contenu" placeholder="contenu" required />
        <button type="submit">Send email</button>
      </form>
    </>
  );
}
