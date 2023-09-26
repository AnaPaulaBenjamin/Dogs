import React from 'react';
import styles from './Footer.module.css';
import Dogs from '../assets/dogs.jsx';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs fill={'#764701'} />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
