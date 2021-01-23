import React from 'react';
import NavItem from './components/NavItem.js';
import Container from '../../components/Container/Container'

export default function Nav() {
  const styles = {
    position: 'fixed',
    display: 'flex',
    background: '#111111',
    width: '100%',
    height: '40px',
    top: '0px',
    left: '0px',
    zIndex: '1'
  }

  return (
    <Container { ...styles } data-testid='nav-container'>
      <NavItem type='image' height="35px" paddingTop="1px" paddingLeft="5px" src={`${process.env.PUBLIC_URL}/scho-logo.png`} value='Home' href='/home' />
      {/* <NavItem type="anchor" value="Merch" href="https://scho.clothing" /> */}
    </Container>
  );
}
