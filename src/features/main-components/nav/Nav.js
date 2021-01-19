import React from 'react';
import NavItem from './components/NavItem.js';
import Container from '../../components/Container/Container'

export default function Nav() {
  const styles = {
    position: 'fixed',
    display: 'flex',
    background: 'purple',
    width: '100%',
    height: '40px',
    top: '0px',
    left: '0px',
    zIndex: '1'
  }

  return (
    <Container { ...styles } data-testid='nav-container'>
      <NavItem type='anchor' value='Home' href='/home' />
      {/* <NavItem type="anchor" value="Merch" href="https://scho.clothing" /> */}
    </Container>
  );
}
