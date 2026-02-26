
import styles from "@/components/Acceuil/acceuil.module.css";
import { Gabarito400, Gabarito700 } from "@/fonts/fonts";
import { Resend } from "resend";
import React from 'react';
import { EmailTemplate } from '@/components/Contact/email';
import { NextResponse } from 'next/server';
import styles_contact from "@/components/Contact/contact.module.css";

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
      <div className={`${styles_contact.back} ${Gabarito700.className}`}>
     <form action={send} className={`${styles_contact.formContainer} ${Gabarito400.className}`}>
        <h2 className={styles_contact.formTitle}>Contactez-moi</h2>
        <input type="email" name="email" placeholder="Votre email" required className={styles_contact.inputField}/>
        <input type="text" name="objet" placeholder="Objet" required className={styles_contact.inputField}/>
        <input type="text" name="contenu" placeholder="Votre message" required className={styles_contact.inputField}/>
        <button type="submit" className={styles_contact.submitButton}>Envoyer</button>
      </form>
      </div>
    </>
  );
}
