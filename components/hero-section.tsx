import type { NextPage } from 'next';
import { useState } from 'react';
import styles from './hero-section.module.css';

const HeroSection: NextPage = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSaveClick = async () => {
    // Aquí puedes realizar la lógica para guardar el correo electrónico
    console.log(`Guardar correo electrónico: ${email}`);

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response) {
        const data = await response.json();
        console.log(data); // Hacer algo con la respuesta
      } else {
        console.error('Error al agregar el contacto');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud');
    }
  };

  return (
    <section
      className={styles.heroSection}
      id='hero-section'
    >
      <div
        className={styles.container1}
        id='texts-1'
      >
        <div
          className={styles.text1}
          id='titles-1'
        >
          <h1
            className={styles.h1}
            id='h1-1'
          >
            La gestión de gastos corporativos nunca ha sido tan fácil
          </h1>
          <p
            className={styles.h2}
            id='h2-1'
          >
            Transforma los tediosos y lentos reportes de gastos, la recuperación
            de facturas y los reembolsos en algo fácil, automatizado y
            agradable.
          </p>
        </div>
        <div
          className={styles.emailInput}
          id='subscribe-container'
        >
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
        </div>
      </div>
      <div
        className={styles.img1Container}
        id='img-1-container'
      >
        <img
          className={styles.img1Icon}
          alt=''
          src='/img1@2x.png'
        />
      </div>
    </section>
  );
};

export default HeroSection;
