'use client'

import type { NextPage } from 'next';
import { useState } from 'react';
import styles from './hero-section.module.css';

const HeroSectionEmailInput: NextPage = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`/api/subscribe/${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response) {
        const data = await response.json();
        console.log(data);
        setEmailSent(true);
      } else {
        console.error('Error al agregar el contacto');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud');
    }
  };

  return (
        <div
          className={styles.emailInput}
          id='subscribe-container'
        >
          {!emailSent ? (
<>
          <input
            className={styles.email}
            type='email'
            placeholder='email...'
            value={email}
            onChange={handleInputChange}
            />
          <button
            className={styles.buttonSubscribe}
            onClick={handleSaveClick}
            >
            <span
              className={styles.masInformacion}
              id='email-button'
              >
              mas informacion
            </span>
          </button>
              </>
          ) : (
            <span className={styles.email}>Email registrado</span>
          )}
        </div>
  );
};

export default HeroSectionEmailInput;
