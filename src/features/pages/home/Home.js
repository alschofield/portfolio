import React from 'react';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import Text from '../../components/Text/Text';
import List from '../../components/List/List';

export default function Home() {
  const containerStyles = {
    paddingTop: '40px',
    minHeight: 'calc(100vh - 115px)',
    background: '#555555'
  }

  return (
    <Container { ...containerStyles } padding="15px" data-testid='home-container'>
      <Header>Current Projects</Header>
      <List list={['portfolio website', 'DWC (direct water capture)']} />
      <Header>Future Projects</Header>
      <List list={['podcast sounds cool', 'music sounds cool', 'AI/ML is cool']} />
    </Container>
  );
}
