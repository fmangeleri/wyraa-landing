import type { NextPage } from 'next';
import { useState } from 'react';
import styles from './hero-section.module.css';
import Image from 'next/image';
import HeroSectionEmailInput from './hero-section-email-input';

const HeroSection: NextPage = () => {

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
        <HeroSectionEmailInput />
      </div>
      <div
        className={styles.img1Container}
        id='img-1-container'
      >
        <Image
          className={styles.img1Icon}
          alt=''
          src='/img1@2x.png'
          width={710}
          height={660}
        />
      </div>
    </section>
  );
};

export default HeroSection;
