import React from 'react';
import Container from '../../components/Container/Container.js'
// import styles from './Footer.module.css';

export function Footer() {
  const containerStyles = {
    height: '60px',
    background: 'orange'
  }

  return (
    <Container { ...containerStyles } >

    </Container>
  );
}
