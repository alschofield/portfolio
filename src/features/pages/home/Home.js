import React from 'react';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';

import { withTheme } from '../../../themes';

const Home = ({ theme }) => {
  return (
    <Container theme={theme.home.container} data-testid='home-container'>
      <Header>Current Projects</Header>
      <List list={['learn rust (programming language)', 'study math (one of the bags has been secured)']} />
      <Header>Projects on Hold</Header>
      <List list={['DWC (direct water capture) (need to study more math and engineering first)', 'study engineering (want to refresh/learn more math first)']} />
      <Header>Future Projects</Header>
      <List list={['']} />
    </Container>
  );
}

export default withTheme(Home)
