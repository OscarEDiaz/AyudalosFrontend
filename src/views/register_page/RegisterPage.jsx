import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Navbar } from '../../components/navbar/Navbar';

import '../../styles/register_page/registerPage.css';
import { useEffect } from 'react';

export const RegisterPage = () => {
  const [emailSent, setEmailSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mm6iu2q', 'template_qs7obdj', form.current, {
        publicKey: `${import.meta.env.VITE_EMAIL_JS_API_KEY}`,
      })
      .then(
        () => {
          setEmailSent(true);
        },
        (error) => {
          setEmailSent(false);
        },
      );
  };

  useEffect(() => {
    setEmailSent(false);
  }, [])

  return (
    <div className='form-div'>
      <Navbar />
      <div className="form_holder" style={{ 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center' }}>
        <form className='register-form' ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
        { emailSent && <p style={{ 'marginTop': '20px' }}>¡Correo enviado! Te contactaremos pronto</p> }
      </div>
    </div>
  );
};