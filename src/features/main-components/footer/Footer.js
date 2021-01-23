import React from 'react';
import Container from '../../components/Container/Container';

export default function Footer() {
  const containerStyles = {
    display: 'flex',
    height: '60px',
    background: '#444444',
    color: '#F8F4EC',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <Container { ...containerStyles } data-testid='footer-container'>
      Scho Technologies
    </Container>
  );
}
