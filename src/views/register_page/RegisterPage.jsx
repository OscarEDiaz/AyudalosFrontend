import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Navbar } from '../../components/navbar/Navbar';
import '../../styles/register_page/registerPage.css';

export const RegisterPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mm6iu2q', 'template_qs7obdj', form.current, {
        publicKey: 'lya6e-NSXmgTVrOHP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <Navbar />
      <div className="form_holder">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
    </div>
  );
};